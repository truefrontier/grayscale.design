<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="{{ env('APP_ENV') }}">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>grayscale design | Luminance-based color palette generator for Tailwind CSS</title>
        <link rel="stylesheet" href="{{ mix('css/tailwind.css') }}" />
        <link rel="canonical" href="{{ url()->current() }}" />
        <script src="https://kit.fontawesome.com/41590b8d21.js" crossorigin="anonymous"></script>
    @if (env('APP_ENV') === 'production')
        <!-- Fathom - beautiful, simple website analytics -->
        <script src="https://angelfish.grayscale.design/script.js" site="QBCMJQGI" defer></script>
        <!-- / Fathom -->
    @endif
    </head>
    <body>
        @inertia
        @routes
        <script>window.Statamic = @json($statamic)</script>
        <script src="{{ mix('/js/site.js') }}"></script>
    </body>
</html>
