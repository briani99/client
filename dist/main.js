System.register(['bootstrap', './authConfig', 'aurelia-i18n'], function (_export, _context) {
    "use strict";

    var authConfig, I18N, Backend, TCustomAttribute;
    function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging();

        aurelia.use.plugin('aurelia-i18n', function (instance) {
            var aliases = ['t', 'i18n'];

            TCustomAttribute.configureAliases(aliases);

            instance.i18next.use(Backend.with(aurelia.loader));

            return instance.setup({
                backend: {
                    loadPath: './locales/{{lng}}/{{ns}}.json' },
                attributes: aliases,
                lng: 'en',
                fallbackLng: 'es',
                debug: false
            });
        });

        aurelia.use.plugin('aurelia-api', function (configure) {
            configure.registerEndpoint('auth', 'http://localhost:8080/auth').registerEndpoint('secure', 'http://localhost:8080/secure/').registerEndpoint('public', 'http://localhost:8080/').setDefaultEndpoint('public');
        });

        aurelia.use.plugin('aurelia-authentication', function (baseConfig) {
            baseConfig.configure(authConfig);
        });

        aurelia.use.plugin('aurelia-animator-css');


        aurelia.start().then(function () {
            return aurelia.setRoot();
        });
    }

    _export('configure', configure);

    return {
        setters: [function (_bootstrap) {}, function (_authConfig) {
            authConfig = _authConfig.default;
        }, function (_aureliaI18n) {
            I18N = _aureliaI18n.I18N;
            Backend = _aureliaI18n.Backend;
            TCustomAttribute = _aureliaI18n.TCustomAttribute;
        }],
        execute: function () {}
    };
});
//# sourceMappingURL=main.js.map
