import {computedFrom, inject} from 'aurelia-framework';
import {BaseI18N} from 'aurelia-i18n';

@inject(BaseI18N)
export class Welcome {
  

  constructor(i18n) {
    this.i18n = i18n;

    this.heading = this.i18n.i18n.tr('welcome_header');
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.previousValue = this.fullName;
  
  }
  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  @computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
