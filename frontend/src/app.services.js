import angular from 'angular';
import ApiService from './services/api.service'
import UserService from './services/user.service'
import SpeechService from './services/speech.service'

const services = 'app.services';

angular.module(services, [])
    .service('ApiService', ApiService)
    .service('UserService', UserService)
    .service('SpeechService', SpeechService)
;

export default services;