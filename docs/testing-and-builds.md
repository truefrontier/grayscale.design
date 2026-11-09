# Testing and building

**Bottom line:** There are two test suites, and each needs a specific runtime. `npm test` needs Node 20.19 or later. The `.nvmrc` pins Node 18, which can't run it. PHPUnit needs PHP 7.4 and Composer's dev dependencies, but no `.env`. `public/` is committed, and `npm run prod` rebuilds it byte for byte on Node 18, 22 or 26.

## JavaScript tests: `npm test`

```bash
npm test    # node --test tests/js/*.test.mjs
```

- **Node:** 20.19+ or 22.12+. The tests import the plain `.js` files in `resources/js/utils/`, which use `export`. Older Node treats those files as CommonJS.
- **Node 18 fails every file,** including `.nvmrc`'s `lts/hydrogen` (18.20.8):
  ```
  SyntaxError: Named export 'jsIdent' not found. The requested module
  '../../resources/js/utils/palette-name.js' is a CommonJS module ...
  ```
- **Checked:** Node 18.20.8 failed all 3 files. Node 20.20.0, 22.19.0 and 26.7.0 passed all 9 tests (on `overflow/grayscale-combined-2`).
- **No build first:** the tests read `resources/js/` directly.

## PHP tests: PHPUnit

```bash
composer install                  # with dev dependencies; a --no-dev vendor/ has no PHPUnit
vendor/bin/phpunit                # run it with PHP 7.4
vendor/bin/phpunit --filter ExportSvg
```

- **PHP 7.4.** This is Laravel 7 (`"php": "^7.2.5"`). With Herd, call PHP 7.4 directly:
  ```bash
  "$HOME/Library/Application Support/Herd/bin/php74" vendor/bin/phpunit
  ```
  Run `composer install` under PHP 7.4 too, so Composer picks versions that run there.
- **No `.env` needed.** `phpunit.xml` sets a test-only `APP_KEY` (from `grayscale-phpunit-wipe`). Before that branch, 8 of 9 tests errored without a key.
- **What it covers:** palette uploads (allowed types, size cap, the hourly clean-up command) and the SVG export (escaping, 422 on a malformed post).

## Rebuilding `public/`

`public/0.js`, `public/css/tailwind.css` and `public/mix-manifest.json` are committed, and the live site serves them. **A source change doesn't reach the site until someone rebuilds and commits `public/`.**

```bash
npm run prod
```

- **Any of Node 18, 22 or 26 works.** Each rebuilt `27ebf92` byte for byte, all 312 files under `public/`, with no `NODE_OPTIONS=--openssl-legacy-provider`.
- **`vendor/tightenco/ziggy` has to exist.** `webpack.mix.js` aliases `ziggy` to it. `composer install` provides it.
- **Build from a clean copy** when the checkout has stray files:
  ```bash
  git archive HEAD | tar -x -C /path/to/scratch
  ```
  Then copy in `node_modules` and `vendor/tightenco`, build there, and copy back the `public/` files that changed. PurgeCSS keeps any class-like word it finds in `resources/**` and `content/**/*.md`, so a stray `.bak` file can change `tailwind.css`.
- **Expect `tailwind.css` to change sometimes,** even with no new classes. PurgeCSS keeps every word that matches a Tailwind class, wherever it appears. For example, the word `static` in a JavaScript list keeps `.static{position:static}`. When the CSS changes, `mix-manifest.json` changes with it (the cache-busting hash).
- **When merging several branches,** each branch has usually rebuilt `public/0.js`, so they conflict there. Keep either copy during the merges, then rebuild once from the merged source. `overflow/grayscale-combined` and `-combined-2` were built that way.

## Running the app locally without `.env`

For a quick look at a branch, PHP's built-in server works with throwaway settings on the command line. It needs no MySQL and no `.env`:

```bash
APP_KEY="base64:$(head -c32 /dev/urandom | base64)" APP_ENV=local APP_URL=http://127.0.0.1:8765 \
SESSION_DRIVER=array CACHE_DRIVER=array DB_CONNECTION=sqlite DB_DATABASE=:memory: \
"$HOME/Library/Application Support/Herd/bin/php74" -S 127.0.0.1:8765 -t public server.php
```

- Then open `http://127.0.0.1:8765/app`. A share link (`/app?lums=...&palettes=...&names=...`) loads a palette.
- I checked the palette app and every export box this way. I didn't check uploads or the Statamic control panel.
- It serves whatever `public/` holds, so rebuild first if you changed `resources/js`.
