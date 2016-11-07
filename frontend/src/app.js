import angular from 'angular';
import router from 'angular-ui-router';
import animate from 'angular-animate';

import './vendor';

import components from './app.components';
import routes from './app.routes';
import services from './app.services';

angular.module('app', [
  router, animate,
  components, routes, services
]).config(['$httpProvider', $httpProvider => {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
}]);