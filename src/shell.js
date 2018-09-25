
import {AuthNavStep} from './auth/authNavStep';

export class Shell {
    configureRouter(config, router) {
        config.title = 'Sharify';

        config.addPipelineStep('authorize', AuthNavStep);

        config.map([
            {   route: ['', 'welcome'], name: 'welcome',    moduleId: 'views/welcome',     nav: true, title: 'Welcome', settings: { t:'welcome' } },
            {   route: 'login',         name: 'login',      moduleId: 'views/auth/login',             title: 'Login',   settings: { t:'login' } }
        ]);

    this.router = router;
    };
}