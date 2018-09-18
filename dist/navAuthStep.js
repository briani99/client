System.register(['aurelia-dependency-injection', 'aurelia-router', 'aurelia-authentication'], function (_export, _context) {
    "use strict";

    var inject, Redirect, AuthService, _dec, _class, NavAuthStep;

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
            _export('NavAuthStep', NavAuthStep = (_dec = inject(AuthService), _dec(_class = function () {
                function NavAuthStep(authService) {
                    _classCallCheck(this, NavAuthStep);

                    this.authService = authService;
                }

                NavAuthStep.prototype.run = function run(routingContext, next) {
                    var isLoggedIn = this.authService.authenticated;
                    var loginRoute = this.authService.config.loginRoute;

                    if (routingContext.getAllInstructions().some(function (route) {
                        return route.config.auth === true;
                    })) {
                        if (!isLoggedIn) {
                            this.authService.config.loginRedirect = routingContext;
                            return next.cancel(new Redirect(loginRoute));
                        }
                    } else if (isLoggedIn && routingContext.getAllInstructions().some(function (route) {
                        return route.fragment === loginRoute;
                    })) {
                        return next.cancel(new Redirect(this.authService.config.loginRedirect));
                    }

                    return next();
                };

                return NavAuthStep;
            }()) || _class));

            _export('NavAuthStep', NavAuthStep);
        }
    };
});
//# sourceMappingURL=navAuthStep.js.map
