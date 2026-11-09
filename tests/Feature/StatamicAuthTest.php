<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Mail;
use Statamic\Auth\Passwords\PasswordReset as ResetLink;
use Statamic\Facades\Stache;
use Statamic\Facades\User;
use Statamic\Licensing\Outpost;
use Tests\TestCase;

class StatamicAuthTest extends TestCase
{
    private $usersDir;
    private $originalUsersDir;
    private $user;
    private $resetsTable;

    protected function setUp(): void
    {
        parent::setUp();

        // Users are files. Keep this test's user out of the checkout's users/ folder.
        $this->originalUsersDir = Stache::store('users')->directory();
        $this->usersDir = sys_get_temp_dir() . '/grayscale-users-' . uniqid();
        File::makeDirectory($this->usersDir);
        Stache::store('users')->directory($this->usersDir);

        // The control panel's routes ask Statamic's licence server about the site. Not from a test.
        $this->mock(Outpost::class)->shouldReceive('radio');

        // Reset tokens are a file too, named after this table, and a second reset for the
        // same user within a minute is throttled. A fresh file per test.
        $this->resetsTable = 'test-resets-' . uniqid();
        config(['auth.passwords.users.table' => $this->resetsTable]);

        $this->user = User::make()->email('owner@example.test')->password('secret-password');
        $this->user->save();
    }

    protected function tearDown(): void
    {
        ResetLink::resetFormUrl(null);
        ResetLink::redirectAfterReset(null);
        Stache::store('users')->directory($this->originalUsersDir);
        File::deleteDirectory($this->usersDir);
        File::delete(storage_path("statamic/password_resets/{$this->resetsTable}.yaml"));

        parent::tearDown();
    }

    public function testResetUrlIsRefusedOnTheSiteResetForm()
    {
        $this->post('/!/auth/password/email', [
            'email' => 'owner@example.test',
            'reset_url' => 'https://evil.example/reset',
        ])->assertStatus(422);

        $this->assertSame([], $this->sentMail());
    }

    public function testResetUrlIsRefusedOnTheControlPanelResetForm()
    {
        $this->post('/cp/auth/password/email?reset_url=https://evil.example/reset', [
            'email' => 'owner@example.test',
        ])->assertStatus(422);

        $this->assertSame([], $this->sentMail());
    }

    public function testControlPanelResetStillMailsALinkToThisSite()
    {
        $this->post('/cp/auth/password/email', ['email' => 'owner@example.test'])->assertRedirect();

        $mail = $this->sentMail();
        $this->assertCount(1, $mail);
        $this->assertStringContainsString('http://localhost/!/auth/password/reset/', $mail[0]);
    }

    /** Bodies of the messages the array mailer (phpunit.xml) has sent. */
    private function sentMail()
    {
        return Mail::getSwiftMailer()->getTransport()->messages()->map(function ($message) {
            return $message->toString();
        })->values()->all();
    }
}
