import angular from 'angular';
import ApiService from './services/api.service'
import UserService from './services/user.service'

const services = 'app.services';

angular.module(services, [])
    .service('ApiService', ApiService)
    .service('UserService', UserService)
;

export default services;