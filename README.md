<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, yet powerful, providing tools needed for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of any modern web application framework, making it a breeze to get started learning the framework.

If you're not in the mood to read, [Laracasts](https://laracasts.com) contains over 1100 video tutorials on a range of topics including Laravel, modern PHP, unit testing, JavaScript, and more. Boost the skill level of yourself and your entire team by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for helping fund on-going Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell):

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[British Software Development](https://www.britishsoftware.co)**
- [Fragrantica](https://www.fragrantica.com)
- [SOFTonSOFA](https://softonsofa.com/)
- [User10](https://user10.com)
- [Soumettre.fr](https://soumettre.fr/)
- [CodeBrisk](https://codebrisk.com)
- [1Forge](https://1forge.com)
- [TECPRESSO](https://tecpresso.co.jp/)
- [Pulse Storm](http://www.pulsestorm.net/)
- [Runtime Converter](http://runtimeconverter.com/)
- [WebL'Agence](https://weblagence.com/)

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Included JS
- [bootstrap-select](https://www.npmjs.com/package/bootstrap-select)
- [pjax](https://www.npmjs.com/package/pjax)
- [select2](https://www.npmjs.com/package/select2)

## Included PHP Package
- [arcanedev/log-viewer](https://packagist.org/packages/arcanedev/log-viewer)
- [barryvdh/laravel-debugbar](https://packagist.org/packages/barryvdh/laravel-debugbar)
- [jenssegers/agent](https://packagist.org/packages/jenssegers/agent)
- [laracasts/flash](https://packagist.org/packages/laracasts/flash)
- [laravel/telescope](https://packagist.org/packages/laravel/telescope)
- [league/csv](https://packagist.org/packages/league/csv)
- [mpociot/laravel-apidoc-generator](https://packagist.org/packages/mpociot/laravel-apidoc-generator)
- [nwidart/laravel-modules](https://packagist.org/packages/nwidart/laravel-modules)
- [recca0120/terminal](https://packagist.org/packages/recca0120/terminal)
- [renatomarinho/laravel-page-speed](https://packagist.org/packages/renatomarinho/laravel-page-speed)
- [spatie/laravel-medialibrary](https://packagist.org/packages/spatie/laravel-medialibrary)
- [spatie/laravel-permission](https://packagist.org/packages/spatie/laravel-permission)
- [stechstudio/laravel-php-cs-fixer](https://packagist.org/packages/stechstudio/laravel-php-cs-fixer)
- [tymon/jwt-auth](https://packagist.org/packages/tymon/jwt-auth)

## Installation
- Run command
```
git pull origin master
git submodule update --init --recursive
composer install
```
- Copy .env.example to .env, and update all setting
- Run command
```
php artisan jwt:secret
php artisan key:generate
php artisan migrate
php artisan module:migrate
php artisan module:seed
php artisan storage:link
```

## To Do
- Use model instead table name
- In api docs, use like menu
