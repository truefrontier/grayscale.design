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
        return [
            $this->allSubdomainsOfApplicationUrl(),
            // The live site by name too, so an APP_URL there that names another host can't 404 every page.
            '^(.+\.)?grayscale\.design$',
        ];
    }
}
