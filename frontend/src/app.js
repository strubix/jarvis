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
]).config(['$httpProvider', ($httpProvider) => {
  $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}]);