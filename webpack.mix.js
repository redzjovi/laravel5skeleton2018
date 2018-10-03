let mix = require('laravel-mix');

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

// mix.js('resources/assets/js/app.js', 'public/js')
//     .sass('resources/assets/sass/app.scss', 'public/css');

mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts/*', 'public/webfonts')
.styles([
    'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
    'node_modules/bootstrap/dist/css/bootstrap.min.css', 'Modules/Cms/Resources/assets/node_modules/bootstrap/bootstrap-custom.css',
], 'public/css/backend--app.css');

mix.combine([
    'node_modules/jquery/dist/jquery.min.js',

    'node_modules/@fortawesome/fontawesome-free/js/all.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',

    'Modules/Cms/Resources/assets/js/core.js',
    'public/vendor/lord/laroute/js/laroute.js',
], 'public/js/backend--app.js');
