angular.module('assessment').controller('bioCtrl', function($scope, $http, mainService, $stateParams) {


$scope.getBio = function() {
  var id = $stateParams.id;
  console.log($stateParams.id);
  $http({
    method: 'GET',
    url: 'http://practiceapi.devmounta.in/pets/' + id
  })
  .then(function(response) {
    console.log(response);
    $scope.pet = response;
  })
}

  
})