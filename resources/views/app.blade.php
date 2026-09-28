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
