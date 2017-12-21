import {inject} from 'aurelia-framework';
import {Config} from 'aurelia-api';

@inject(Config)
export class DbUsers {
    
    heading = 'Github Users';
    users = [];

    constructor(config) {
        this.apiEndpoint = config.getEndpoint('secure');

        this.apiEndpoint.find('users')
        .then(users => {
            this.users = users;
        })
        .catch(console.error);
    }
}