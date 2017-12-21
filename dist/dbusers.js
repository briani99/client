System.register(['aurelia-framework', 'aurelia-api'], function (_export, _context) {
    "use strict";

    var inject, Config, _dec, _class, DbUsers;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaApi) {
            Config = _aureliaApi.Config;
        }],
        execute: function () {
            _export('DbUsers', DbUsers = (_dec = inject(Config), _dec(_class = function DbUsers(config) {
                var _this = this;

                _classCallCheck(this, DbUsers);

                this.heading = 'Github Users';
                this.users = [];

                this.apiEndpoint = config.getEndpoint('secure');

                this.apiEndpoint.find('users').then(function (users) {
                    _this.users = users;
                }).catch(console.error);
            }) || _class));

            _export('DbUsers', DbUsers);
        }
    };
});
//# sourceMappingURL=dbusers.js.map
