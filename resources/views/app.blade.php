<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="{{ env('APP_ENV') }}">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>grayscale design | Luminance-based color palette generator for Tailwind CSS</title>
        <link rel="stylesheet" href="{{ mix('css/tailwind.css') }}" />
        <script src="https://kit.fontawesome.com/41590b8d21.js" crossorigin="anonymous"></script>
        <!-- Fathom - beautiful, simple website analytics -->
<script src="https://cdn.usefathom.com/script.js" spa="auto" site="QBCMJQGI" defer></script>
<!-- / Fathom -->
    </head>
    <body>
        @inertia
        @routes
        <script>window.Statamic = @json($statamic)</script>
        <script src="{{ mix('/js/site.js') }}"></script>
    </body>
</html>
