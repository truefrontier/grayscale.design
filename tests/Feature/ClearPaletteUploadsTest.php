<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ClearPaletteUploadsTest extends TestCase
{
    public function testDeletesOnlyPalettesOlderThanAnHour()
    {
        $disk = Storage::fake('public_uploads');
        $ages = ['two-hours.png' => 120, 'sixty-one-minutes.png' => 61, 'fifty-nine-minutes.png' => 59, 'just-now.png' => 0];
        foreach ($ages as $name => $minutes) {
            $disk->put("palettes/$name", 'x');
            touch($disk->path("palettes/$name"), now()->subMinutes($minutes)->getTimestamp());
        }

        $exitCode = $this->artisan('uploads:clear-palettes')->run();

        $left = $disk->files('palettes');
        sort($left);
        $this->assertSame(['palettes/fifty-nine-minutes.png', 'palettes/just-now.png'], $left);
        $this->assertSame(0, $exitCode);
    }
}
