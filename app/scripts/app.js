'use strict';

/**
 * @ngdoc overview
 * @name flickrApp
 * @description
 * # flickrApp
 *
 * Application module.
 */
angular
  .module('flickrApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',

    'config',
    'flickrApp.main',
    'flickrApp.home'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'scripts/main/views/main.html'
      });

      // If none of the previous routes matches
      $urlRouterProvider.otherwise('/app/home');
  });
