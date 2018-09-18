/* authConfig.js */
var DevConfig = {
    endpoint: null,              // use 'auth' endpoint for the auth server
    configureEndpoints: ['secure'],  // add Authorization header to 'auth' endpoint
    storageChangedReload: true,    // ensure secondary tab reloading after auth status changes
    
    baseUrl: 'http://localhost:8080',
    loginUrl: '/auth/login',
    signupUrl: 'auth/signup',
    
    httpInterceptor: true,
    
    authHeader: 'Authorization',
    authTokenType: 'Bearer',
    logoutOnInvalidtoken: false,
    
    //accessTokenProp: 'token',
    //accessTokenName: 'token',
    //accessTokenRoot: true,
    idTokenProp: 'token',
    idTohenName: 'token',
    idTokenRoot: false,
    
    defaultLoginRedirect: '#/welcome',
    loginRedirect: '#/welcome',
    logoutRedirect: '#/',
    signupRedirect: '#/welcome',
    
    providers: {
        facebook:{
            url: '/facebook',
            clientId: '148962132531532',
            redirectUri: window.location.origin + '/',
            display: 'popup'
        }
    }
};

var PrdConfig = {
    endpoint: null,              // use 'auth' endpoint for the auth server
    configureEndpoints: ['secure'],  // add Authorization header to 'auth' endpoint
    storageChangedReload: true,    // ensure secondary tab reloading after auth status changes
    
    baseUrl: 'https://aurauth.herokuapp.com',
    loginUrl: '/auth/login',
    
    //httpInterceptor: true,
    
    authHeader: 'Authorization',
    authTokenType: 'Bearer',
    logoutOnInvalidtoken: false,
    
    //accessTokenProp: 'token',
    //accessTokenName: 'token',
    //accessTokenRoot: true,
    idTokenProp: 'token',
    idTohenName: 'token',
    idTokenRoot: false,
    
    loginRedirect: '#/welcome',
    
    
    providers: {
        facebook:{
            url: '/facebook',
            clientId: '372796726502628',
            redirectUri: window.location.origin + '/',
            display: 'popup'
        }
    }
};

var config;
if (window.location.hostname==='localhost') {
	config = DevConfig;
}
else{
	config = PrdConfig;
}
export default config;
