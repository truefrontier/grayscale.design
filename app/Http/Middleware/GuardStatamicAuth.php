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

        return $next($request);
    }
}
