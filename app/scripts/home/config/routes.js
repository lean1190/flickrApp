'use strict';

angular
  .module('flickrApp.home')
  .config(function ($stateProvider) {

      $stateProvider

      .state('app.home', {
          url: '/home',
          templateUrl: 'scripts/home/views/home.html'
      });

  });
