System.register(['aurelia-dependency-injection', 'aurelia-router', 'aurelia-authentication'], function (_export, _context) {
    "use strict";

    var inject, Redirect, AuthService, _dec, _class, AuthNavStep;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaDependencyInjection) {
            inject = _aureliaDependencyInjection.inject;
        }, function (_aureliaRouter) {
            Redirect = _aureliaRouter.Redirect;
        }, function (_aureliaAuthentication) {
            AuthService = _aureliaAuthentication.AuthService;
        }],
        execute: function () {
            _export('AuthNavStep', AuthNavStep = (_dec = inject(AuthService), _dec(_class = function () {
                function AuthNavStep(authService) {
                    _classCallCheck(this, AuthNavStep);

                    this.authService = authService;
                }

                AuthNavStep.prototype.run = function run(routingContext, next) {
                    var isLoggedIn = this.authService.authenticated;
                    var loginRoute = this.authService.config.loginRoute;

                    if (routingContext.getAllInstructions().some(function (route) {
                        return route.config.auth === true;
                    })) {
                        if (!isLoggedIn) {
                            this.authService.config.loginRedirect = '#' + routingContext.fragment;
                            return next.cancel(new Redirect(loginRoute));
                        }
                    } else if (isLoggedIn && routingContext.getAllInstructions().some(function (route) {
                        return route.fragment === loginRoute;
                    })) {
                        return next.cancel(new Redirect(this.authService.config.loginRedirect));
                    }

                    return next();
                };

                return AuthNavStep;
            }()) || _class));

            _export('AuthNavStep', AuthNavStep);
        }
    };
});
//# sourceMappingURL=authNavStep.js.map
