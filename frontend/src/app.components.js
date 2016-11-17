import angular from 'angular';

import HomeComponent from './components/home/home';
import NavbarComponent from './components/navbar/navbar';
import SpeechComponent from './components/speech-component/speech-component';
import RegisterComponent from './components/register/register';
import LoginComponent from './components/login/login';

const components = 'app.components';

angular.module(components, [])
    .component('home', HomeComponent)
    .component('navbar', NavbarComponent)
    .component('speech', SpeechComponent)
    .component('register', RegisterComponent)
    .component('login', LoginComponent)
;

export default components;