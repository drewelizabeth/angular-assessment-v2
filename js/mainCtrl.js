angular.module('assessment').controller('mainCtrl', function ($scope, mainService, $stateParams) {

  $scope.getPets = function () {
    mainService.getPets()
      .then(function (response) {
        $scope.pets = response;
        console.log('ctrl: ' + response);
      })
  }

  $scope.getPets();

  $scope.showImage = true;
  $scope.hideClick = false;

  $scope.hideImage = function () {
    $scope.showImage = false;
    $scope.hideClick = true;
  }

  $scope.showImg = function () {
    $scope.hideClick = false;
    $scope.showImage = true;
  }

//   $scope.getBio = function() {
//   var id = $stateParams.id
//   $http({
//     method: 'GET',
//     url: 'http://practiceapi.devmounta.in/pets/' + id
//   })
//   .then(function(response) {
//     console.log('bio ' + response)
//     $scope.pet = reponse;
//   })
// }

})