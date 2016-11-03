import angular from 'angular';
import SpeechService from './services/speech.service'

const services = 'app.services';

angular.module(services, [])
    .service('SpeechService', SpeechService)
;

export default services;