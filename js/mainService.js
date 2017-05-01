angular.module('assessment').service('mainService', function($http) {

  this.getPets = function() {
    return $http.get('http://practiceapi.devmounta.in/pets')
    .then(function(response) {
      console.log('srv ' + response.data)
      return response.data;
    })
  }

})