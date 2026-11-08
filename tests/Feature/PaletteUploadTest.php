<?php

namespace Tests\Feature;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class PaletteUploadTest extends TestCase
{
    // A 1x1 PNG.
    const PNG = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

    protected function setUp(): void
    {
        parent::setUp();

        Storage::fake('public_uploads');
    }

    public function testPngIsStoredAsPng()
    {
        $response = $this->upload('palette.png', base64_decode(self::PNG));

        $response->assertOk()->assertJsonStructure(['url', 'path']);
        $this->assertRegExp('#^palettes/[A-Za-z0-9]{40}\.png$#', $response->json('path'));
        Storage::disk('public_uploads')->assertExists($response->json('path'));
    }

    /**
     * @dataProvider rejectedUploads
     */
    public function testRejectedUploadIsNotStored($name, $content)
    {
        $this->upload($name, $content)->assertStatus(422)->assertJsonValidationErrors('file');

        $this->assertSame([], Storage::disk('public_uploads')->allFiles());
    }

    public function rejectedUploads()
    {
        $php = '<?php echo "hello";';
        $svg = '<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>';
        $html = '<!DOCTYPE html><html><body><script>alert(1)</script></body></html>';

        return [
            'php' => ['shell.php', $php],
            'php named .png' => ['shell.png', $php],
            'svg' => ['palette.svg', $svg],
            'svg named .png' => ['palette.png', $svg],
            'html named .png' => ['palette.png', $html],
            'png over 5 MB' => ['big.png', base64_decode(self::PNG) . str_repeat("\0", 5 * 1024 * 1024)],
        ];
    }

    private function upload($name, $content)
    {
        // A real UploadedFile over real bytes. UploadedFile::fake() reports its MIME
        // type from the filename, which would hide a PHP payload named .png.
        $tmp = tmpfile();
        fwrite($tmp, $content);
        $file = new UploadedFile(stream_get_meta_data($tmp)['uri'], $name, null, null, true);

        return $this->post('/palette-uploads', ['file' => $file], ['Accept' => 'application/json']);
    }
}
