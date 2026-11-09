<?php

namespace App\Http\Middleware;

use Illuminate\Http\Middleware\TrustHosts as Middleware;

class TrustHosts extends Middleware
{
    /**
     * Get the host patterns that should be trusted.
     *
     * @return array
     */
    public function hosts()
    {
        $appHost = parse_url(config('app.url'), PHP_URL_HOST);

        // Exact names, not every subdomain: mcp.grayscale.design is a separate service, and a reset
        // link built on any other name would hand it the token. The live site is listed by name too,
        // so an APP_URL there that names another host can't 404 every page.
        return [
            $appHost ? '^' . preg_quote($appHost) . '$' : null,
            '^(www\.)?grayscale\.design$',
        ];
    }
}
