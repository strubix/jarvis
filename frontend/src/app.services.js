import angular from 'angular';
import ApiService from './services/api.service'

const services = 'app.services';

angular.module(services, [])
    .service('ApiService', ApiService)
;

export default services;