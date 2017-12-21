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

    heading  = 'Login Page';

    email    = '';
    password = '';

    // login per email+password
    login() {
    return this.auth.login(this.email, this.password);
    }

    signup() {
    return this.auth.signup(this.email, this.email, this.password);
    }

    logout(){
    return this.auth.logout();
    }

     // login with third-party authentication
     authenticate(name) {
        return this.auth.authenticate(name)
        .then(response => {
           this.providers[name] = true;
        });
     }
}