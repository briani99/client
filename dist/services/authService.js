System.register(['aurelia-framework', 'aurelia-http-client'], function (_export, _context) {
  "use strict";

  var inject, HttpClient, _createClass, _dec, _class, AuthService;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
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

      _export('AuthService', AuthService = (_dec = inject(HttpClient), _dec(_class = function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http.configure(function (x) {
            x.withBaseUrl('http://localhost:3000');
          });
        }

        AuthService.prototype.login = function login(username, password) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            _this.http.post('login', { username: username, password: password }).then(function (httpResponse) {
              var response = JSON.parse(httpResponse.response);
              _this.token = response.token;
              resolve(response.user);
            }).catch(function (httpResponse) {
              if (httpResponse.statusCode === 401) {
                return reject('Please check login and password');
              }
              reject(httpResponse.response);
            });
          });
        };

        AuthService.prototype.signUp = function signUp(username, password) {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            _this2.http.post('register', { username: username, password: password }).then(resolve).catch(function (httpResponse) {
              return reject(httpResponse.response);
            });
          });
        };

        _createClass(AuthService, [{
          key: 'token',
          set: function set(value) {
            localStorage.setItem('token', value);
          },
          get: function get() {
            return localStorage.getItem('token');
          }
        }]);

        return AuthService;
      }()) || _class));

      _export('AuthService', AuthService);
    }
  };
});
//# sourceMappingURL=authService.js.map
