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
    protected $description = 'Remove the /public/uploads/palettes/ directory';

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
        return Storage::disk('public_uploads')->deleteDir('palettes');
    }
}
