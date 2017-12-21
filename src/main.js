import 'bootstrap';
import authConfig from './authConfig';
import {I18N, Backend, TCustomAttribute} from 'aurelia-i18n';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    
    aurelia.use.plugin('aurelia-i18n', (instance) => {
          let aliases = ['t', 'i18n'];
          // add aliases for 't' attribute
          TCustomAttribute.configureAliases(aliases);
          
          // register backend plugin
          instance.i18next.use(Backend.with(aurelia.loader));

          // adapt options to your needs (see http://i18next.com/docs/options/)
          // make sure to return the promise of the setup method, in order to guarantee proper loading
          return instance.setup({
            backend: {                                  // <-- configure backend settings
              loadPath: './locales/{{lng}}/{{ns}}.json', // <-- XHR settings for where to get the files from
            },
            attributes: aliases,
            lng : 'en',
            fallbackLng : 'es',
            debug : false
          });
    });
    
    /* setup the api endpoints first */
    aurelia.use.plugin('aurelia-api', configure => {
      configure
        .registerEndpoint('auth', 'http://localhost:8080/auth')
        .registerEndpoint('secure', 'http://localhost:8080/secure/')
        .registerEndpoint('public', 'http://localhost:8080/')
        .setDefaultEndpoint('public');
    });
    
    /* configure aurelia-authentication from config file */
    aurelia.use.plugin('aurelia-authentication', baseConfig => {
        baseConfig.configure(authConfig);
    });

    //Uncomment the line below to enable animation.
    aurelia.use.plugin('aurelia-animator-css');
    //if the css animator is enabled, add swap-order="after" to all router-view elements
    
    aurelia.start().then(() => aurelia.setRoot());
}
