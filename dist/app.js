System.register(['aurelia-authentication'], function (_export, _context) {
    "use strict";

    var AuthenticateStep, App;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaAuthentication) {
            AuthenticateStep = _aureliaAuthentication.AuthenticateStep;
        }],
        execute: function () {
            _export('App', App = function () {
                function App() {
                    _classCallCheck(this, App);
                }

                App.prototype.configureRouter = function configureRouter(config, router) {
                    config.title = 'Aurelia';

                    config.addPipelineStep('authorize', AuthenticateStep);

                    config.map([{ route: ['', 'welcome'],
                        name: 'welcome',
                        moduleId: 'welcome',
                        nav: true,
                        title: 'Welcome',
                        settings: { t: 'welcome' } }, { route: 'dbusers',
                        name: 'dbusers',
                        moduleId: 'dbusers',
                        nav: true,
                        title: 'DB Users',
                        auth: true,
                        settings: { t: 'dbusers' }
                    }, { route: 'login',
                        name: 'login',
                        moduleId: 'login',
                        title: 'Login',
                        settings: { t: 'login' }
                    }]);

                    this.router = router;
                };

                return App;
            }());

            _export('App', App);
        }
    };
});
//# sourceMappingURL=app.js.map
