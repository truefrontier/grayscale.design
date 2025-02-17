const mix = require('laravel-mix');
require('laravel-mix-purgecss');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const path = require('path');

mix.webpackConfig({
  resolve: {
    alias: {
      ziggy: path.resolve('vendor/tightenco/ziggy/src/js/route.js'),
    },
  },
});

mix.js('resources/js/site.js', 'public/js');

mix.postCss('resources/css/tailwind.css', 'public/css', [
  require('postcss-import'),
  require('tailwindcss')('./tailwind.config.js'),
  require('postcss-nested'),
  require('postcss-preset-env')({ stage: 0 }),
  require('autoprefixer'),
]);

if (mix.inProduction()) {
  mix.version();
  mix.purgeCss({
    // enabled: true,
    defaultExtractor: function (content) {
      return content.match(/[\w-/:]+(?<!:)/g) || [];
    },
    content: [
      './public/**/*.vue',
      './public/**/*.js',
      './public/**/*.php',
      './public/**/*.html',
      './content/**/*.md',
    ],
  });
} else {
  mix.browserSync({
    proxy: 'https://grayscale.valet',
    notify: false,
    files: [
      './webpack.mix.js',
      './tailwind.config.js',
      './content/**/*.md',
      './content/**/*.yaml',
      './content/**/*.html',
      './resources/**/*.md',
      './resources/**/*.yaml',
      './resources/**/*.js',
      './resources/**/*.vue',
      './resources/**/*.css',
      './resources/**/*.scss',
      './resources/**/*.html',
      './resources/**/*.php',
    ],
  });
}

/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//    .postCss('resources/css/cp.css', 'public/vendor/app/css', [
//     require('postcss-import'),
//     require('tailwindcss'),
//     require('postcss-nested'),
//     require('postcss-preset-env')({stage: 0})
// ])
