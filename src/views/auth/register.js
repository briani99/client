import {inject, computedFrom} from 'aurelia-framework';
import {AuthService} from 'aurelia-authentication';

@inject(AuthService)
export class register {

  constructor(auth) {
    this.auth = auth;
    this.providers = [];
  }

  @computedFrom('auth.authenticated')
  get authenticated() {
    return this.auth.authenticated;
  }

  email = '';
  password = '';

  attached() {
    $('body').addClass('gray-bg');
  }

  signup() {
    return this.auth.signup(this.email, this.email, this.password)
      .then(response => {
        this.auth.config.loginRedirect = this.auth.config.defaultLoginRedirect;
      });
  }
}
