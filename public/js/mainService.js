app.factory('mainService', ['$http', function($http){
  var serviceData = {

    //contact list array
    colorList: [],

    getAllColors: function(){

      return $http.get('/home').then(function(res){
        console.log(res);
        angular.copy(res.data, serviceData.colorList);
      })
      .catch(function(err){
        console.error(err);
      });
    }



  }

  return serviceData;

}]);
