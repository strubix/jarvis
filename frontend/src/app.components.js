import angular from 'angular';

import HomeComponent from './components/home/home';
import NavbarComponent from './components/navbar/navbar';
import SpeechComponent from './components/speech-component/speech-component';
import RegisterComponent from './components/register/register';

const components = 'app.components';

angular.module(components, [])
    .component('home', HomeComponent)
    .component('navbar', NavbarComponent)
    .component('speech', SpeechComponent)
    .component('register', RegisterComponent)
;

export default components;