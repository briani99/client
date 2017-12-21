System.register(['aurelia-framework', 'aurelia-http-client', 'auth/authService'], function (_export, _context) {
  "use strict";

  var inject, HttpClient, AuthService, _dec, _class, PollsService;

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
    }, function (_authAuthService) {
      AuthService = _authAuthService.AuthService;
    }],
    execute: function () {
      _export('PollsService', PollsService = (_dec = inject(HttpClient, AuthService), _dec(_class = function () {
        function PollsService(http, authService) {
          _classCallCheck(this, PollsService);

          this.http = http.configure(function (x) {
            x.withBaseUrl('http://localhost:3000');
          });
          this.authService = authService;
        }

        PollsService.prototype.getTop = function getTop() {
          var _this = this;

          return new Promise(function (resolve) {
            _this.http.createRequest('polls').asGet().withHeader('Authorization', 'Bearer ' + _this.authService.token).send().then(function (httpResponse) {
              resolve(JSON.parse(httpResponse.response).polls);
            }).catch(function () {
              return resolve([]);
            });
          });
        };

        return PollsService;
      }()) || _class));

      _export('PollsService', PollsService);
    }
  };
});
//# sourceMappingURL=pollService.js.map
