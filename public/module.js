var app = angular.module('colors', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


  $stateProvider
      .state('home', {
      url: '/',
      templateUrl: './templates/home.html',
      controller: 'mainCtrl',
      resolve: {
          getColors: ['mainService', function(mainService) {
            console.log("get colors")
              return mainService.getAllColors();
          }]
      }

    });

    $urlRouterProvider.otherwise('/');

}]);
