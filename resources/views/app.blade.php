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
@php
    $isApp = in_array(url()->current(), ['https://grayscale.design/app', 'http://grayscale.design/app'], true)
        || request()->is('app');
@endphp
@if ($isApp)
        <meta name="description" content="Generate a Tailwind CSS color palette by luminance. Pick a base color and get shades that match grayscale values for predictable contrast.">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="Grayscale Design">
        <meta property="og:url" content="https://grayscale.design/app">
        <meta property="og:title" content="grayscale design | Luminance-based color palette generator for Tailwind CSS">
        <meta property="og:description" content="Generate a Tailwind CSS color palette by luminance. Pick a base color and get shades that match grayscale values for predictable contrast.">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:title" content="grayscale design | Luminance-based color palette generator for Tailwind CSS">
        <meta name="twitter:description" content="Generate a Tailwind CSS color palette by luminance. Pick a base color and get shades that match grayscale values for predictable contrast.">
@else
        <meta name="description" content="Grayscale Design is a free luminance-based color palette generator for Tailwind CSS. Design in grayscale first, then swap in colors with the same color value for accessible contrast.">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="Grayscale Design">
        <meta property="og:url" content="https://grayscale.design/">
        <meta property="og:title" content="grayscale design | Luminance-based color palette generator for Tailwind CSS">
        <meta property="og:description" content="Free luminance-based color palette generator for Tailwind CSS. Get contrast right in grayscale, then add color.">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:title" content="grayscale design | Luminance-based color palette generator for Tailwind CSS">
        <meta name="twitter:description" content="Free luminance-based color palette generator for Tailwind CSS. Get contrast right in grayscale, then add color.">
@endif
@if (url()->current() === 'https://grayscale.design' || url()->current() === 'https://grayscale.design/')
        <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "Grayscale Design",
      "alternateName": ["grayscale.design", "grayscale design"],
      "url": "https://grayscale.design/",
      "description": "Luminance-based color palette generator for Tailwind CSS — a color value-first approach for accessible contrast."
    },
    {
      "@type": "SoftwareApplication",
      "name": "Grayscale Design",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "Web",
      "url": "https://grayscale.design/",
      "description": "Generate luminance-based color palettes for Tailwind CSS with a color value-first workflow for better contrast and accessibility.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
}
        </script>
@endif
        <link rel="stylesheet" href="https://fa.truefrontierapps.com/v5/css/all.min.css" />
        <link rel="stylesheet" href="https://fa.truefrontierapps.com/custom/grayscale.css" />
@if (env('APP_ENV') === 'production')
        <!-- Fathom - beautiful, simple website analytics -->
        <script src="https://cdn.usefathom.com/script.js" data-site="QBCMJQGI" defer></script>
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
