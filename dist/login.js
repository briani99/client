System.register(['aurelia-framework', 'aurelia-authentication'], function (_export, _context) {
    "use strict";

    var inject, computedFrom, AuthService, _createClass, _dec, _dec2, _class, _desc, _value, _class2, Login;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            computedFrom = _aureliaFramework.computedFrom;
        }, function (_aureliaAuthentication) {
            AuthService = _aureliaAuthentication.AuthService;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('Login', Login = (_dec = inject(AuthService), _dec2 = computedFrom('auth.authenticated'), _dec(_class = (_class2 = function () {
                function Login(auth) {
                    _classCallCheck(this, Login);

                    this.heading = 'Login Page';
                    this.email = '';
                    this.password = '';

                    this.auth = auth;
                    this.providers = [];
                }

                Login.prototype.login = function login() {
                    return this.auth.login(this.email, this.password);
                };

                Login.prototype.signup = function signup() {
                    return this.auth.signup(this.email, this.email, this.password);
                };

                Login.prototype.logout = function logout() {
                    return this.auth.logout();
                };

                Login.prototype.authenticate = function authenticate(name) {
                    var _this = this;

                    return this.auth.authenticate(name).then(function (response) {
                        _this.providers[name] = true;
                    });
                };

                _createClass(Login, [{
                    key: 'authenticated',
                    get: function get() {
                        return this.auth.authenticated;
                    }
                }]);

                return Login;
            }(), (_applyDecoratedDescriptor(_class2.prototype, 'authenticated', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'authenticated'), _class2.prototype)), _class2)) || _class));

            _export('Login', Login);
        }
    };
});
//# sourceMappingURL=login.js.map
