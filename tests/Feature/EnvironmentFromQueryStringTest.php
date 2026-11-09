<?php

namespace Tests\Feature;

use Illuminate\Container\Container;
use Illuminate\Foundation\Application;
use Tests\TestCase;

class EnvironmentFromQueryStringTest extends TestCase
{
    private $argv;

    protected function setUp(): void
    {
        parent::setUp();

        $this->argv = $_SERVER['argv'] ?? null;
    }

    protected function tearDown(): void
    {
        $_SERVER['argv'] = $this->argv;
        unset($_SERVER['APP_RUNNING_IN_CONSOLE']);
        Container::setInstance($this->app);

        parent::tearDown();
    }

    public function testAWebRequestsQueryStringCantChooseTheEnvironment()
    {
        // With PHP's register_argc_argv on, a web request for /?--env=local puts '--env=local' in
        // $_SERVER['argv'] (GHSA-gv7v-rgg6-548h). Here, a fresh app that isn't running in a console.
        $_SERVER['APP_RUNNING_IN_CONSOLE'] = 'false';
        $_SERVER['argv'] = ['index.php', '--env=local'];

        $app = new Application(base_path());

        $this->assertSame('production', $app->detectEnvironment(function () {
            return 'production';
        }));
    }

    public function testTheConsoleCanStillChooseIt()
    {
        $_SERVER['APP_RUNNING_IN_CONSOLE'] = 'true';
        $_SERVER['argv'] = ['artisan', 'migrate', '--env=staging'];

        $app = new Application(base_path());

        $this->assertSame('staging', $app->detectEnvironment(function () {
            return 'production';
        }));
    }
}
