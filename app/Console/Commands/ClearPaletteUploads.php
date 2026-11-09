<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class ClearPaletteUploads extends Command {
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'uploads:clear-palettes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Remove palette uploads older than an hour from /public/uploads/palettes/';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle() {
        // Only files over an hour old: a palette uploaded just before the run is still being read by imgix.
        $disk = Storage::disk('public_uploads');
        $cutoff = now()->subHour()->getTimestamp();
        $disk->delete(array_filter($disk->files('palettes'), function ($path) use ($disk, $cutoff) {
            return $disk->lastModified($path) < $cutoff;
        }));

        return 0;
    }
}
