import {inject, computedFrom} from 'aurelia-framework';
import {AuthService} from 'aurelia-authentication';

@inject(AuthService)
export class Login {
    
    constructor(auth) {
        this.auth = auth;
        this.providers = [];
    }

    @computedFrom('auth.authenticated')
    get authenticated(){
        return this.auth.authenticated;
    }

    email    = '';
    password = '';

    // login per email+password
    login() {
        console.log(this.email);
        console.log(this.password);
        return this.auth.login(this.email, this.password)
        .then(response => {
            this.auth.config.loginRedirect = this.auth.config.defaultLoginRedirect;
        });
    }

    logout(){
        return this.auth.logout();
    }

    // login with third-party authentication
    authenticate(name) {
        return this.auth.authenticate(name)
        .then(response => {
           this.providers[name] = true;
           this.auth.config.loginRedirect = this.auth.config.defaultLoginRedirect;
        });
    }

    attached(){
		$('body').addClass('gray-bg');
	}
}