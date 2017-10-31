var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$http) {   
  $scope.nfunc = function(){
    console.log('---------- Inside nfunc -------------');
	console.log($scope.mydata);
    $http.post('/',{anydata: $scope.mydata}).then(function(response){
      $scope.resultconcat = response.data;
    });
   }
});