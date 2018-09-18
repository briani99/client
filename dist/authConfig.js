System.register([], function (_export, _context) {
    "use strict";

    var DevConfig, PrdConfig, config;
    return {
        setters: [],
        execute: function () {
            DevConfig = {
                endpoint: null,
                configureEndpoints: ['secure'],
                storageChangedReload: true,

                baseUrl: 'http://localhost:8080',
                loginUrl: '/auth/login',
                signupUrl: 'auth/signup',

                httpInterceptor: true,

                authHeader: 'Authorization',
                authTokenType: 'Bearer',
                logoutOnInvalidtoken: false,

                idTokenProp: 'token',
                idTohenName: 'token',
                idTokenRoot: false,

                defaultLoginRedirect: '#/welcome',
                loginRedirect: '#/welcome',
                logoutRedirect: '#/',
                signupRedirect: '#/welcome',

                providers: {
                    facebook: {
                        url: '/facebook',
                        clientId: '148962132531532',
                        redirectUri: window.location.origin + '/',
                        display: 'popup'
                    }
                }
            };
            PrdConfig = {
                endpoint: null,
                configureEndpoints: ['secure'],
                storageChangedReload: true,

                baseUrl: 'https://aurauth.herokuapp.com',
                loginUrl: '/auth/login',

                authHeader: 'Authorization',
                authTokenType: 'Bearer',
                logoutOnInvalidtoken: false,

                idTokenProp: 'token',
                idTohenName: 'token',
                idTokenRoot: false,

                loginRedirect: '#/welcome',

                providers: {
                    facebook: {
                        url: '/facebook',
                        clientId: '372796726502628',
                        redirectUri: window.location.origin + '/',
                        display: 'popup'
                    }
                }
            };

            if (window.location.hostname === 'localhost') {
                config = DevConfig;
            } else {
                config = PrdConfig;
            }

            _export('default', config);
        }
    };
});
//# sourceMappingURL=authConfig.js.map
