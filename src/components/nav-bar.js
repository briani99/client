import {inject, computedFrom, bindable} from 'aurelia-framework';
import {AuthService} from 'aurelia-authentication';


@inject(AuthService)
export class NavBar {
    constructor(auth){
        this.auth = auth;
    }
    
    @bindable router;
    
    @computedFrom('auth.authenticated')
    get authenticated(){
        return this.auth.authenticated;
    }
    
    logout(){
        this.auth.logout();
    }
}