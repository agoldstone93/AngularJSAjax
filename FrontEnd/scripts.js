var myModule = angular.module('myModule',[]);

var myController = function($scope, $http, $timeout) {
  $scope.doClick = function() {
    var successCallback = function (response){
      $scope.loading = false;
      $scope.customers = response.data;
    }
    
    var failureCallback = function (response) {
      $scope.loading = false;
      $scope.error = response.statusText + "\r\n\r\n" + response.data;
    }
    $scope.loading = true;
    $scope.error = null;
    $scope.customers = null;
    $http({
      method: 'GET', url: 'http://localhost:5000/getcustomers'
    }).then(successCallback, failureCallback);
  }

  $scope.loading = false;
};
myModule.controller("myController", myController);