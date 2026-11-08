<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UploadController extends Controller {
    public function upload(Request $request) {
        // Same types and 5 MB cap the page's file picker already enforces. Not the
        // `image` rule: in Laravel 7 it lets SVG through.
        $request->validate([
            'file' => 'required|file|mimes:png,gif,jpeg,jpg|max:5120',
        ]);

        // `mimes` checked guessExtension(), which reads the file's bytes, not the
        // client's filename. Naming the file with that same value means only
        // png/gif/jpeg/jpg ever land in public/uploads.
        $file = $request->file('file');
        $name = Str::random(40) . '.' . $file->guessExtension();

        if ($uploadedFile = $file->storeAs('palettes', $name, 'public_uploads')) {
            return [
                'url' => env('IMGIX_URL') . "/$uploadedFile",
                'path' => "$uploadedFile",
            ];
        }
        return false;
    }
}
