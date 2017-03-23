var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


  $stateProvider
      .state('home', {
      url: '/',
      templateUrl: './templates/home.html'
      // controller: 'MainController',
      // resolve: {
      //     getColors: ['mainService', function(mainService) {
      //       console.log("get colors")
      //         return mainService.getAllColors();
      //     }]
      // }

    });

    $urlRouterProvider.otherwise('/');

}]);
