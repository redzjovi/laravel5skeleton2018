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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.styles(
        [
            'Modules/Cms/Resources/assets/node_modules/bootstrap/bootstrap-custom.css'
        ],
        'public/css/backend--app.css'
    );

mix.combine(
    [
        'node_modules/pjax/pjax.min.js',
        'Modules/Cms/Resources/assets/node_modules/bootstrap-select/bootstrap-select.js',
        'Modules/Cms/Resources/assets/node_modules/pjax/pjax-custom.js',
        'Modules/Cms/Resources/assets/js/core.js'
    ],
    'public/js/backend--app.js'
);
