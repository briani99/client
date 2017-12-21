import {AuthenticateStep} from 'aurelia-authentication';

export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia';

        config.addPipelineStep('authorize', AuthenticateStep); // Add a route filter so only authenticated uses are authorized to access some routes

        config.map([
            {   route: ['', 'welcome'], 
                name: 'welcome',      
                moduleId: 'welcome',     
                nav: true, 
                title: 'Welcome', 
                settings: { t:'welcome' } },
            
            {   route: 'dbusers',
                name: 'dbusers',      
                moduleId: 'dbusers',      
                nav: true, 
                title: 'DB Users', 
                auth: true, 
                settings: { t:'dbusers' }  
            },
            {   route: 'login',         
                name: 'login',        
                moduleId: 'login',      
                title: 'Login', 
                settings: { t:'login' } 
            }
        ]);

    this.router = router;
    };
}