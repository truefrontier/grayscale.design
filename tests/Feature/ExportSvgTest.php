<?php

namespace Tests\Feature;

use Tests\TestCase;

class ExportSvgTest extends TestCase
{
    // What the App page posts: JSON.stringify(cssColors), one palette with one swatch here.
    private function palettes(string $name, string $hex = '#ef4444', array $rgb = [239, 68, 68]): string
    {
        return json_encode([
            $name => ['name' => $name, 'swatches' => [
                ['hex' => $hex, 'rgb' => $rgb, 'hsl' => [0, 84.2, 60.2], 'lum' => 22.88],
            ]],
        ]);
    }

    public function testNamesAndValuesAreEscapedInTheSvg()
    {
        $response = $this->post('/export-svgs', [
            'palettes' => $this->palettes('"/><script>alert(1)</script><x a="', '#fff" onload="alert(2)', ['<b>', 68, 68]),
        ]);

        $response->assertOk();
        $svg = $response->getContent();
        $this->assertStringNotContainsString('<script', $svg);
        $this->assertStringNotContainsString('" onload=', $svg);
        $this->assertStringNotContainsString('<b>', $svg);
        $this->assertStringContainsString('&lt;script&gt;alert(1)&lt;/script&gt;', $svg);
        $this->assertStringContainsString('id="&quot;/&gt;&lt;script&gt;', $svg);
        $this->assertStringContainsString('style="fill: #fff&quot; onload=&quot;alert(2)"', $svg);
    }

    public function testMalformedPalettesAreA422NotA500()
    {
        foreach (['not json', '"a string"', '[1, 2]', '{"red": {}}', '{"red": {"swatches": 5}}'] as $palettes) {
            $this->post('/export-svgs', ['palettes' => $palettes])->assertStatus(422);
        }
    }

    /**
     * @dataProvider malformedSwatches
     */
    public function testAMalformedSwatchIsA422($swatches)
    {
        // Ten of these were a 500. A list in hsl or lum printed a blank.
        $this->post('/export-svgs', ['palettes' => json_encode(['red' => ['swatches' => $swatches]])])->assertStatus(422);
    }

    public function malformedSwatches()
    {
        $ok = ['hex' => '#ef4444', 'rgb' => [239, 68, 68], 'hsl' => [0, 84.2, 60.2], 'lum' => 22.88];

        return [
            'not an object' => [[5]],
            'no hex' => [[array_diff_key($ok, ['hex' => 1])]],
            'hex is a list' => [[['hex' => ['#fff']] + $ok]],
            'no rgb' => [[array_diff_key($ok, ['rgb' => 1])]],
            'rgb is a string' => [[['rgb' => '239,68,68'] + $ok]],
            'rgb holds a list' => [[['rgb' => [[239], 68, 68]] + $ok]],
            'no hsl' => [[array_diff_key($ok, ['hsl' => 1])]],
            'hsl too short' => [[['hsl' => [0, 84.2]] + $ok]],
            'hsl holds a list' => [[['hsl' => [[0], 84.2, 60.2]] + $ok]],
            'no lum' => [[array_diff_key($ok, ['lum' => 1])]],
            'lum is a list' => [[['lum' => [22.88]] + $ok]],
            'key is a word' => [['first' => $ok]],
        ];
    }

    public function testASwatchShapedLikeThePagesStillExports()
    {
        // What App.vue's cssColors sends, swatches keyed "0", "1"..., with oklch and label too.
        // JSON.stringify writes NaN as null, and that printed as 0 before, so it still does.
        $swatch = ['lum' => 22.88, 'rgb' => [239, 68, 68], 'hex' => '#ef4444', 'hsl' => [0, 84.2, null],
            'oklch' => [0.63, 0.21, 25.3], 'label' => '500'];
        $palettes = json_encode(['red' => ['name' => 'red', 'hex' => '#ef4444', 'swatches' => (object) ['0' => $swatch, '1' => $swatch]]]);

        $response = $this->post('/export-svgs', ['palettes' => $palettes]);

        $response->assertOk();
        $this->assertStringContainsString('monospace">0, 84.2%, 0%</text>', $response->getContent());
    }

    // $count palettes of $swatches swatches each.
    private function many(int $count, int $swatches): string
    {
        $swatch = ['hex' => '#000000', 'rgb' => [0, 0, 0], 'hsl' => [0, 0, 0], 'lum' => 0];
        $palettes = [];
        for ($i = 0; $i < $count; $i++) {
            $palettes["p$i"] = ['swatches' => array_fill(0, $swatches, $swatch)];
        }

        return json_encode($palettes);
    }

    public function testTheBiggestAllowedExportStillWorks()
    {
        $this->post('/export-svgs', ['palettes' => $this->many(50, 30)])->assertOk();
    }

    public function testTooManyPalettesOrSwatchesIsA422()
    {
        // Unbounded, a 2 MB post came back as a 30 MB SVG, and a 3.4 MB one ran PHP out of memory.
        $this->post('/export-svgs', ['palettes' => $this->many(51, 1)])->assertStatus(422);
        $this->post('/export-svgs', ['palettes' => $this->many(1, 31)])->assertStatus(422);
    }

    public function testALongNameIsA422()
    {
        // The name goes into every swatch's id, so a 2 MB name ran PHP out of memory under the caps above.
        $this->post('/export-svgs', ['palettes' => $this->palettes(str_repeat('n', 101))])->assertStatus(422);
        $this->post('/export-svgs', ['palettes' => $this->palettes(str_repeat('n', 100))])->assertOk();
    }

    public function testAnOversizedPostIsA413()
    {
        // 50 palettes of 20 swatches, as the page sends them, come to about 180 KB.
        $this->post('/export-svgs', ['palettes' => $this->palettes('red', str_repeat('#', 512 * 1024))])->assertStatus(413);
    }

    public function testExportIsThrottled()
    {
        for ($i = 0; $i < 20; $i++) {
            $this->post('/export-svgs', ['palettes' => $this->palettes('red')])->assertOk();
        }

        $this->post('/export-svgs', ['palettes' => $this->palettes('red')])->assertStatus(429);
    }

    public function testUploadsDontUseUpTheExportLimit()
    {
        // Laravel 7 keys `throttle` by domain and IP, not route, so both routes shared one count of 20.
        for ($i = 0; $i < 20; $i++) {
            $this->postJson('/palette-uploads')->assertStatus(422);
        }

        $this->post('/export-svgs', ['palettes' => $this->palettes('red')])->assertOk();
    }

    public function testAnOrdinaryPaletteIsUnchanged()
    {
        $response = $this->post('/export-svgs', ['palettes' => $this->palettes('red')]);

        $response->assertOk();
        $this->assertStringContainsString('attachment; filename=grayscale-', $response->headers->get('Content-Disposition'));
        $svg = $response->getContent();
        $this->assertStringContainsString('font-weight: 700">red</text>', $svg);
        $this->assertStringContainsString('<rect id="red-100" x="50" y="60" width="60" height="60" style="fill: #ef4444" />', $svg);
        $this->assertStringContainsString('monospace">239, 68, 68</text>', $svg);
        $this->assertStringContainsString('monospace">0, 84.2%, 60.2%</text>', $svg);
    }
}
