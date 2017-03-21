app.controller('mainCtrl', ['$scope', 'mainService', '$state', function($scope, mainService, $state){

  //getting data from service

  $scope.colorList = mainService.colorList;
  $scope.open = false;
  $scope.listOfFive = [];
  $scope.page = 0;
  $scope.loadNextFive = function() {
    if ($scope.listOfFive.length) $scope.listOfFive = [];
    for (var i = 0; i < 5; i++) {
      if(($scope.page+i)< mainService.colorList.length){
          $scope.listOfFive.push(mainService.colorList[$scope.page+i]);
      }
    }
    $scope.page += 5;
    console.log($scope.page);
  }

  $scope.loadPrevFive = function() {
    if($scope.page > 5) {
      $scope.page -= 10;
      $scope.loadNextFive();
    }

  }
  $scope.loadNextFive();
  console.log($scope.listOfFive);
  console.log($scope.page);



}]);
