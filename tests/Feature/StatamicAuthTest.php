<?php

namespace Tests\Feature;

use App\Http\Middleware\VerifyCsrfToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
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
        Request::setTrustedHosts([]);
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

    public function testSiteSignInIsOff()
    {
        // The control panel's sign-in locks an address out after five misses. This one never did.
        $this->post('/!/auth/login', ['email' => 'owner@example.test', 'password' => 'secret-password'])->assertNotFound();

        $this->assertGuest();
    }

    public function testSiteSignUpIsOff()
    {
        $this->post('/!/auth/register', [
            'email' => 'stranger@example.test',
            'password' => 'stranger-password',
            'password_confirmation' => 'stranger-password',
        ])->assertNotFound();

        $this->assertGuest();
        $this->assertNull(User::findByEmail('stranger@example.test'));
        $this->assertCount(1, File::files($this->usersDir));
    }

    public function testResetAndInviteFormsStillOpen()
    {
        // The control panel's reset and invite emails link to these, so the guard must leave them be.
        $this->get('/!/auth/password/reset/some-token')->assertOk();
        $this->get('/!/auth/activate/some-token')->assertOk();
    }

    public function testImageTransformsNeedASignature()
    {
        // Glide can fetch remote images. Only signed URLs (config/statamic/assets.php `secure`) stop
        // anyone using that to make this server fetch any URL.
        $this->get('/img/http/' . base64_encode('http://127.0.0.1:9/private') . '/x.jpg')->assertStatus(400);
        $this->get('/img/asset/assets/x.jpg?w=10')->assertStatus(400);
    }

    public function testControlPanelSignInStillWorks()
    {
        $this->post('/cp/auth/login', ['email' => 'owner@example.test', 'password' => 'secret-password'])->assertRedirect();

        $this->assertAuthenticated();
    }

    /**
     * @dataProvider offSiteRedirects
     */
    public function testLogoutWontRedirectOffSite($to)
    {
        foreach (['/!/auth/logout', '/cp/auth/logout'] as $logout) {
            $this->get($logout . '?redirect=' . rawurlencode($to))->assertRedirect('http://localhost');
        }
    }

    public function offSiteRedirects()
    {
        return [
            'absolute' => ['https://evil.example/login'],
            'scheme-relative' => ['//evil.example/login'],
            // PHP reads the host as localhost; browsers treat the backslash as a slash and go to evil.example.
            'backslash before @' => ['https://evil.example\\@localhost/login'],
        ];
    }

    public function testLogoutStillRedirectsWithinTheSite()
    {
        $this->get('/!/auth/logout?redirect=/app')->assertRedirect('http://localhost/app');
        $this->get('/cp/auth/logout?redirect=' . rawurlencode('http://localhost/cp'))->assertRedirect('http://localhost/cp');
    }

    public function testFinishedResetWontRedirectOffSite()
    {
        $this->post('/!/auth/password/reset', [
            'token' => Password::broker()->createToken($this->user),
            'email' => 'owner@example.test',
            'password' => 'a-new-password',
            'password_confirmation' => 'a-new-password',
            'redirect' => 'https://evil.example/login',
        ])->assertRedirect('http://localhost');
    }

    public function testResetAskedForUnderAnotherHostIsRefused()
    {
        $this->actAsProduction();

        // The reset link is built from the request's host. If the web server hands this app a
        // request for any host, the mailed link would point wherever the Host header says.
        $this->post('http://evil.example/!/auth/password/email', ['email' => 'owner@example.test'])->assertNotFound();

        $this->assertSame([], $this->sentMail());
    }

    public function testTheLiveHostIsTrustedWhateverAppUrlSays()
    {
        $this->actAsProduction();

        $this->post('https://grayscale.design/!/auth/password/email', ['email' => 'owner@example.test'])->assertRedirect();

        $mail = $this->sentMail();
        $this->assertCount(1, $mail);
        $this->assertStringContainsString('https://grayscale.design/!/auth/password/reset/', $mail[0]);
    }

    /** TrustHosts stands aside in unit tests, and CSRF checks come back outside them. */
    private function actAsProduction()
    {
        $this->app['env'] = 'production';
        $this->withoutMiddleware(VerifyCsrfToken::class);
    }

    /** Bodies of the messages the array mailer (phpunit.xml) has sent. */
    private function sentMail()
    {
        return Mail::getSwiftMailer()->getTransport()->messages()->map(function ($message) {
            return $message->toString();
        })->values()->all();
    }
}
