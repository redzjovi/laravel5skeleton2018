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

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');

mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts/*', 'public/webfonts')
.styles([
    'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
    'node_modules/bootstrap/dist/css/bootstrap.min.css', 'Modules/Cms/Resources/assets/node_modules/bootstrap/bootstrap-custom.css',
    'node_modules/bootstrap-select/dist/css/bootstrap-select.min.css',
    'node_modules/select2/dist/css/select2.min.css',
], 'public/css/backend--app.css');

mix.combine([
    'node_modules/jquery/dist/jquery.min.js',

    'node_modules/@fortawesome/fontawesome-free/js/all.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    'node_modules/bootstrap-select/dist/js/bootstrap-select.min.js',  'Modules/Cms/Resources/assets/node_modules/bootstrap-select/bootstrap-select.js',
    'node_modules/pjax/pjax.min.js', 'Modules/Cms/Resources/assets/node_modules/pjax/pjax-custom.js',
    'node_modules/select2/dist/js/select2.full.min.js', 'Modules/Cms/Resources/assets/node_modules/select2/select2-custom.js',

    'Modules/Cms/Resources/assets/js/core.js',
    'public/vendor/jsvalidation/js/jsvalidation.min.js',
    'public/vendor/lord/laroute/js/laroute.js',
], 'public/js/backend--app.js');
