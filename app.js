angular.module('assessment', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html',
      })
      .state('about', {
        url: '/about',        
        templateUrl: './views/about.html',
      })
      .state('blog', {
        url: '/blog',
        templateUrl: './views/blog.html',
      })
      .state('pets', {
        url: '/pets',
        templateUrl: './views/pets.html',
        controller: 'mainCtrl'
      })
      .state('bio', {
        url: '/bio/:id',
        templateUrl: './views/pet-bio.html',
        controller: 'bioCtrl'
      })

  })