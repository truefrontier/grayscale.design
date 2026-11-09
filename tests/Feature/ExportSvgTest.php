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
