(function () {

    var laroute = (function () {

        var routes = {

            absolute: false,
            rootUrl: 'http://localhost/laravel/laravel5skeleton2018/public',
            routes : [{"host":null,"methods":["GET","HEAD"],"uri":"log-viewer","name":"log-viewer::dashboard","action":"Arcanedev\LogViewer\Http\Controllers\LogViewerController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"log-viewer\/logs","name":"log-viewer::logs.list","action":"Arcanedev\LogViewer\Http\Controllers\LogViewerController@listLogs"},{"host":null,"methods":["DELETE"],"uri":"log-viewer\/logs\/delete","name":"log-viewer::logs.delete","action":"Arcanedev\LogViewer\Http\Controllers\LogViewerController@delete"},{"host":null,"methods":["GET","HEAD"],"uri":"log-viewer\/logs\/{date}","name":"log-viewer::logs.show","action":"Arcanedev\LogViewer\Http\Controllers\LogViewerController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"log-viewer\/logs\/{date}\/download","name":"log-viewer::logs.download","action":"Arcanedev\LogViewer\Http\Controllers\LogViewerController@download"},{"host":null,"methods":["GET","HEAD"],"uri":"log-viewer\/logs\/{date}\/{level}","name":"log-viewer::logs.filter","action":"Arcanedev\LogViewer\Http\Controllers\LogViewerController@showByLevel"},{"host":null,"methods":["GET","HEAD"],"uri":"log-viewer\/logs\/{date}\/{level}\/search","name":"log-viewer::logs.search","action":"Arcanedev\LogViewer\Http\Controllers\LogViewerController@search"},{"host":null,"methods":["GET","HEAD"],"uri":"_debugbar\/open","name":"debugbar.openhandler","action":"Barryvdh\Debugbar\Controllers\OpenHandlerController@handle"},{"host":null,"methods":["GET","HEAD"],"uri":"_debugbar\/clockwork\/{id}","name":"debugbar.clockwork","action":"Barryvdh\Debugbar\Controllers\OpenHandlerController@clockwork"},{"host":null,"methods":["GET","HEAD"],"uri":"_debugbar\/assets\/stylesheets","name":"debugbar.assets.css","action":"Barryvdh\Debugbar\Controllers\AssetController@css"},{"host":null,"methods":["GET","HEAD"],"uri":"_debugbar\/assets\/javascript","name":"debugbar.assets.js","action":"Barryvdh\Debugbar\Controllers\AssetController@js"},{"host":null,"methods":["DELETE"],"uri":"_debugbar\/cache\/{key}\/{tags?}","name":"debugbar.cache.delete","action":"Barryvdh\Debugbar\Controllers\CacheController@delete"},{"host":null,"methods":["GET","HEAD"],"uri":"queue","name":null,"action":"Modules\Queue\Http\Controllers\QueueController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"modules\/user\/backend\/v1\/user","name":"modules.user.backend.v1.user.index","action":"\Modules\User\Http\Controllers\Backend\V1\UserController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"modules\/user\/backend\/v1\/user\/create","name":"modules.user.backend.v1.user.create","action":"\Modules\User\Http\Controllers\Backend\V1\UserController@create"},{"host":null,"methods":["POST"],"uri":"modules\/user\/backend\/v1\/user","name":"modules.user.backend.v1.user.store","action":"\Modules\User\Http\Controllers\Backend\V1\UserController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"modules\/user\/backend\/v1\/user\/{user}\/edit","name":"modules.user.backend.v1.user.edit","action":"\Modules\User\Http\Controllers\Backend\V1\UserController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"modules\/user\/backend\/v1\/user\/{user}","name":"modules.user.backend.v1.user.update","action":"\Modules\User\Http\Controllers\Backend\V1\UserController@update"},{"host":null,"methods":["POST"],"uri":"modules\/user\/backend\/v1\/user\/action","name":"modules.user.backend.v1.user.action","action":"\Modules\User\Http\Controllers\Backend\V1\UserController@action"},{"host":null,"methods":["GET","HEAD"],"uri":"modules\/user\/backend\/v1\/user\/{id}\/delete","name":"modules.user.backend.v1.user.delete","action":"\Modules\User\Http\Controllers\Backend\V1\UserController@delete"},{"host":null,"methods":["GET","HEAD"],"uri":"modules\/user\/backend\/v1\/user\/export-csv","name":"modules.user.backend.v1.user.export-csv","action":"\Modules\User\Http\Controllers\Backend\V1\UserController@exportCsv"},{"host":null,"methods":["GET","HEAD"],"uri":"terminal\/{view?}","name":"terminal.index","action":"Recca0120\Terminal\Http\Controllers\TerminalController@index"},{"host":null,"methods":["POST"],"uri":"terminal\/endpoint","name":"terminal.endpoint","action":"Recca0120\Terminal\Http\Controllers\TerminalController@endpoint"},{"host":null,"methods":["GET","HEAD"],"uri":"terminal\/media\/{file}","name":"terminal.media","action":"Recca0120\Terminal\Http\Controllers\TerminalController@media"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/user","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"\/","name":null,"action":"Closure"}],
            prefix: '',

            route : function (name, parameters, route) {
                route = route || this.getByName(name);

                if ( ! route ) {
                    return undefined;
                }

                return this.toRoute(route, parameters);
            },

            url: function (url, parameters) {
                parameters = parameters || [];

                var uri = url + '/' + parameters.join('/');

                return this.getCorrectUrl(uri);
            },

            toRoute : function (route, parameters) {
                var uri = this.replaceNamedParameters(route.uri, parameters);
                var qs  = this.getRouteQueryString(parameters);

                if (this.absolute && this.isOtherHost(route)){
                    return "//" + route.host + "/" + uri + qs;
                }

                return this.getCorrectUrl(uri + qs);
            },

            isOtherHost: function (route){
                return route.host && route.host != window.location.hostname;
            },

            replaceNamedParameters : function (uri, parameters) {
                uri = uri.replace(/\{(.*?)\??\}/g, function(match, key) {
                    if (parameters.hasOwnProperty(key)) {
                        var value = parameters[key];
                        delete parameters[key];
                        return value;
                    } else {
                        return match;
                    }
                });

                // Strip out any optional parameters that were not given
                uri = uri.replace(/\/\{.*?\?\}/g, '');

                return uri;
            },

            getRouteQueryString : function (parameters) {
                var qs = [];
                for (var key in parameters) {
                    if (parameters.hasOwnProperty(key)) {
                        qs.push(key + '=' + parameters[key]);
                    }
                }

                if (qs.length < 1) {
                    return '';
                }

                return '?' + qs.join('&');
            },

            getByName : function (name) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].name === name) {
                        return this.routes[key];
                    }
                }
            },

            getByAction : function(action) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].action === action) {
                        return this.routes[key];
                    }
                }
            },

            getCorrectUrl: function (uri) {
                var url = this.prefix + '/' + uri.replace(/^\/?/, '');

                if ( ! this.absolute) {
                    return url;
                }

                return this.rootUrl.replace('/\/?$/', '') + url;
            }
        };

        var getLinkAttributes = function(attributes) {
            if ( ! attributes) {
                return '';
            }

            var attrs = [];
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    attrs.push(key + '="' + attributes[key] + '"');
                }
            }

            return attrs.join(' ');
        };

        var getHtmlLink = function (url, title, attributes) {
            title      = title || url;
            attributes = getLinkAttributes(attributes);

            return '<a href="' + url + '" ' + attributes + '>' + title + '</a>';
        };

        return {
            // Generate a url for a given controller action.
            // laroute.action('HomeController@getIndex', [params = {}])
            action : function (name, parameters) {
                parameters = parameters || {};

                return routes.route(name, parameters, routes.getByAction(name));
            },

            // Generate a url for a given named route.
            // laroute.route('routeName', [params = {}])
            route : function (route, parameters) {
                parameters = parameters || {};

                return routes.route(route, parameters);
            },

            // Generate a fully qualified URL to the given path.
            // laroute.route('url', [params = {}])
            url : function (route, parameters) {
                parameters = parameters || {};

                return routes.url(route, parameters);
            },

            // Generate a html link to the given url.
            // laroute.link_to('foo/bar', [title = url], [attributes = {}])
            link_to : function (url, title, attributes) {
                url = this.url(url);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given route.
            // laroute.link_to_route('route.name', [title=url], [parameters = {}], [attributes = {}])
            link_to_route : function (route, title, parameters, attributes) {
                var url = this.route(route, parameters);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given controller action.
            // laroute.link_to_action('HomeController@getIndex', [title=url], [parameters = {}], [attributes = {}])
            link_to_action : function(action, title, parameters, attributes) {
                var url = this.action(action, parameters);

                return getHtmlLink(url, title, attributes);
            }

        };

    }).call(this);

    /**
     * Expose the class either via AMD, CommonJS or the global object
     */
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return laroute;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = laroute;
    }
    else {
        window.laroute = laroute;
    }

}).call(this);

