import angular from 'angular';

const routes = 'app.routes';

angular.module(routes, ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
          .state("home", {
            url: "/",
            template: "<home></home>",
          })
          .state("register", {
            url: "/register",
            template: "<register></register>",
          })
    }]);

export default routes;