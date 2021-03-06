import angular from 'angular';

const routes = 'app.routes';

angular.module(routes, ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
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
          .state("login", {
            url: "/login",
            template: "<login></login>",
          })
          .state("speech", {
            url: "/speech",
            template: "<speech></speech>",
            resolve: {
              security: ['$q', 'UserService', '$state', function($q, UserService, $state){
                if(!UserService.user)
                  return $state.go('login');{
                }
              }]
            }
          })
    }]);

export default routes;