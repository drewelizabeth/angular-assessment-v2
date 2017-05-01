angular.module('assessment').directive('petTmpl', function () {

  return {
    restrict: 'E',
    tempalateUrl: './../views/pet-tmpl.html',
    scope: {
      pet: '=',
      getPets: '&'
    },
    link: function (scope, element, attrs) {
      scope.showImage = true;
      scope.hideClick = false;

      scope.hideImage = function () {
        scope.showImage = false;
        scope.hideClick = true;
      }
    },
    controller: function ($scope, mainService, $stateParams) {
      $scope.getPets = function () {
        mainService.getPets()
          .then(function (response) {
            $scope.pets = response;
          })
      }

      $scope.getPets();
    }



  }

})