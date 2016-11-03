import angular from 'angular';
import ExampleService from './services/example.service'
import SpeechService from './services/speech.service'

const services = 'app.services';

angular.module(services, [])
    .service('ExampleService', ExampleService)
    .service('SpeechService', SpeechService)
;

export default services;