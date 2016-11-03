import angular from 'angular';

import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import SpeechComponent from './components/speech-component/speech-component';

const components = 'app.components';

angular.module(components, [])
    .component('home', Home)
    .component('navbar', Navbar)
    .component('speechComponent', SpeechComponent)
;

export default components;