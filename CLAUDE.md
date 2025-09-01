# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Laravel 7.30.6 application using the "So LIT" stack:
- **Statamic CMS 3.0** - Headless content management
- **Laravel** - Backend framework
- **InertiaJS** - Bridge between Laravel and Vue
- **Vue 2.6** - Frontend framework with Vue Router
- **TailwindCSS 1.7** - CSS framework

The application appears to be a design tool focused on color palettes and grayscale generation, with features for SVG export and palette uploads.

## Development Commands

### Frontend Build Commands
```bash
npm run dev         # Development build
npm run watch       # Watch mode with auto-rebuild
npm run hot         # Hot module replacement with webpack-dev-server
npm run prod        # Production build with minification and PurgeCSS
npm run build       # Alias for production build
```

### Backend Commands
```bash
php artisan serve                # Start development server
php artisan statamic:install     # Install/update Statamic
php artisan migrate              # Run database migrations
php artisan cache:clear          # Clear application cache
php artisan config:clear         # Clear config cache
php artisan route:clear          # Clear route cache
php artisan view:clear           # Clear compiled views
```

### Testing Commands
```bash
vendor/bin/phpunit              # Run PHP tests
vendor/bin/phpunit --filter TestName    # Run specific test
```

## Architecture Overview

### Routing System
The application uses a hybrid routing approach combining Statamic's dynamic content routing with custom Laravel routes:

1. **Dynamic Statamic Routes** (`routes/web.php:19-26`): All Statamic collection entries are automatically routed through `PageController@index`
2. **Custom API Routes**: 
   - `/export-svgs` - SVG export functionality
   - `/palette-uploads` - File upload handling

### InertiaJS Component Resolution
The app uses a nested layout system with automatic fallbacks (`resources/js/site.js:34-61`):

1. **Layouts**: Loaded from `resources/js/Layouts/{StudlyCasedLayoutName}.vue` (falls back to `Default.vue`)
2. **Templates**: Loaded from `resources/js/Templates/{StudlyCasedTemplateName}.vue` (falls back to `Default.vue`)  
3. **Pages**: Loaded from `resources/js/Pages/{StudlyCasedPageName}.vue` (falls back to `Default.vue`)

The layout and template names come from Statamic's content configuration, while the page name is derived from the URL.

### Key Controller Logic
`PageController@index` (`app/Http/Controllers/PageController.php`):
- Resolves URLs to Statamic content
- Transforms content to augmented arrays
- Extracts layout/template names from Statamic data
- Passes data to InertiaJS with proper StudlyCase naming

### Frontend Asset Pipeline
- **Laravel Mix** handles webpack configuration (`webpack.mix.js`)
- **Entry Point**: `resources/js/site.js` → `public/js/site.js`
- **CSS**: `resources/css/tailwind.css` → `public/css/tailwind.css` with PostCSS processing
- **PurgeCSS** enabled in production to remove unused styles
- **BrowserSync** configured for local development at `https://grayscale.valet`

## Local Development Setup

### Environment Configuration
- **URL**: `http://grayscale.valet` (using Laravel Valet/Herd)
- **Database**: MySQL database named `grayscale`
- **Session Driver**: Database sessions
- **Cache Driver**: File-based caching

### Required Services
- PHP 7.2.5+
- MySQL
- Node.js (version specified in `.nvmrc`)
- Composer

## Project-Specific Features

### Color/Design Tools
- Palette generation and management
- Grayscale conversions (see `resources/js/Pages/FalseColor.vue`)
- SVG export capabilities (`ExportController@svgs`)
- File upload for palettes (`UploadController@upload`)

### Component Structure
- `PaletteRow.vue` - Display palette rows
- `SwatchSquare.vue` - Individual color swatches
- `GrayscaleRow.vue` - Grayscale variations display

## Important Considerations

1. **Statamic Content**: All content is managed through Statamic CMS. The PHP controllers primarily handle the bridge between Statamic and InertiaJS.

2. **Asset Versioning**: Production builds use Mix versioning for cache busting (`mix.version()`)

3. **Ziggy Routes**: The project includes Ziggy for using Laravel routes in JavaScript, though it appears partially implemented

4. **Vue Router**: Configured but minimally used - mainly InertiaJS handles routing

5. **Content Directory**: Statamic content files are stored in the `content/` directory