# Security notes

**Bottom line:** This site runs Statamic 3.0.13 on Laravel 7. Statamic adds account routes to every site, and this site uses only the control panel's. `app/Http/Middleware/GuardStatamicAuth.php` turns off or narrows the rest, and `TrustHosts` refuses requests for other hostnames. Revisit both when Statamic is upgraded.

## What the guard does

`GuardStatamicAuth` is global middleware (in `app/Http/Kernel.php`). It isn't in the `web` group, because the control panel's routes use Statamic's own `statamic.cp` group.

| Route | Statamic 3.0's behavior | What the guard does | Why |
|---|---|---|---|
| `POST /!/auth/password/email`, `POST /cp/auth/password/email` | Mails the reset link to any `reset_url` in the request | 422 if the request has `reset_url` | Anyone could have a real user mailed a link that sends the token to their server (GHSA-jxq9-79vj-rgvw, fixed upstream in 5.73.10) |
| `POST /!/auth/register` | Creates a user file and signs the visitor in | 404 | No page offers sign-up, and each request wrote a file |
| `POST /!/auth/login` | Signs in any user, with no lockout | 404 | The control panel's sign-in locks out after 5 misses; this one didn't |
| `GET /!/auth/logout`, `GET /cp/auth/logout`, `POST /!/auth/password/reset`, `POST /!/auth/activate` | Redirect to any `redirect` value | Drops a `redirect` that names another host, has a scheme other than http(s), or has a backslash, `@` or a control character. It checks the query and the body, because Statamic reads them in different orders | A grayscale.design link could land on another site |

**Leave these alone:** `/!/auth/password/reset/{token}` and `/!/auth/activate/{token}`. The control panel's reset and invite emails link to them. `StatamicAuthTest::testResetAndInviteFormsStillOpen` fails if the guard blocks them.

## Hostnames

`TrustHosts` (in `app/Http/Kernel.php`) accepts exactly `APP_URL`'s host, `grayscale.design` and `www.grayscale.design`. Any other `Host` gets a 404, other subdomains included: `mcp.grayscale.design` is a separate service. Without it, a reset requested with a forged `Host` header mailed a link to that host.

It does nothing when `APP_ENV=local`, so production must not run as `local`.

If something calls the server by IP address or by another name (a load balancer health check, an uptime monitor), add that host to `app/Http/Middleware/TrustHosts.php`.

## Rate limits and caps

- `POST /export-svgs`: 20 a minute per IP address, counted apart from uploads (the `export` throttle prefix). A post over 512 KB is a 413. Over 50 palettes, over 30 swatches in a palette, or a palette name over 100 characters is a 422. The page allows 3 to 20 swatches.
- `POST /palette-uploads`: 20 a minute per IP address, PNG, GIF or JPEG only, 5 MB at most.
- `TrustProxies` trusts no proxy. If the site moves behind a load balancer or CDN, set `$proxies` in `app/Http/Middleware/TrustProxies.php`, or every visitor shares one limit.

## Image transforms

Glide can fetch remote images (`/img/http/...`). `secure => true` in `config/statamic/assets.php` means every Glide URL needs a signature made with `APP_KEY`, so nobody can use it to make this server fetch a URL. `StatamicAuthTest::testImageTransformsNeedASignature` fails if that's turned off.

## When Statamic is upgraded

- **From 5.73.10:** Statamic refuses a `reset_url` on another domain itself, so the guard's `reset_url` check is no longer needed.
- **The sign-up, sign-in and redirect rules:** keep these unless the site starts offering site accounts.
- **Re-check after any upgrade:**
  ```bash
  vendor/bin/phpunit --filter 'StatamicAuthTest|ExportSvgTest'
  ```
