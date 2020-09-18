<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller {
    public function upload(Request $request) {
        $file = request()->file('file');
        $path = 'palettes';
        if ($uploadedFile = Storage::disk('public_uploads')->put($path, $file)) {
            return [
                'url' => env('IMGIX_URL') . "/$uploadedFile",
                'path' => "$uploadedFile",
            ];
        }
        return false;
    }
}
