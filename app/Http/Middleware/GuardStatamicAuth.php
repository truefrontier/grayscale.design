<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

/**
 * Closes holes in Statamic 3.0's built-in account routes that this site doesn't use.
 * Global, not in the `web` group: the control panel's routes use Statamic's own group.
 */
class GuardStatamicAuth
{
    public function handle(Request $request, Closure $next)
    {
        $action = config('statamic.routes.action', '!');
        $cp = config('statamic.cp.route', 'cp');

        // Statamic 3.0 mails the reset link to whatever reset_url the request names, so anyone can
        // send a real user a genuine reset email whose link carries the token to their own server
        // (GHSA-jxq9-79vj-rgvw). The control panel's form uses the same code. Nothing here sends one.
        if ($request->has('reset_url') && $request->is("$action/auth/password/email", "$cp/auth/password/email")) {
            abort(422);
        }

        // Site sign-up and sign-in: no page here offers either. Sign-up writes a user file per
        // request, and sign-in has none of the control panel login's lockout after five misses.
        if ($request->is("$action/auth/register", "$action/auth/login")) {
            abort(404);
        }

        // Logout and a finished reset or activation go to whatever `redirect` the request names, so a link
        // to grayscale.design/!/auth/logout?redirect=https://evil.example sent visitors anywhere. Statamic
        // reads the query first in one place and the body first in others, so both are checked, and an
        // off-site value in either drops both. Statamic then falls back to the home page.
        if ($request->is("$action/auth/logout", "$cp/auth/logout", "$action/auth/password/reset", "$action/auth/activate")) {
            $bags = [$request->query, $request->request];
            foreach ($bags as $bag) {
                if ($bag->has('redirect') && $this->leavesSite($bag->all()['redirect'], $request)) {
                    foreach ($bags as $each) {
                        $each->remove('redirect');
                    }
                }
            }
        }

        return $next($request);
    }

    private function leavesSite($to, Request $request)
    {
        // Backslashes, @ and control characters are where PHP's URL parsing and browsers disagree.
        if (! is_string($to) || preg_match('/[\\\\@\x00-\x20\x7f]/', $to)) {
            return true;
        }

        $scheme = parse_url($to, PHP_URL_SCHEME);
        if ($scheme !== null && ! in_array(strtolower((string) $scheme), ['http', 'https'], true)) {
            return true;
        }

        return ! in_array(parse_url($to, PHP_URL_HOST), [null, $request->getHost()], true);
    }
}
