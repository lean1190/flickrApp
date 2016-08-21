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
    'LocalStorageModule',

    'config',
    'flickrApp.main',
    'flickrApp.home',
    'flickrApp.photos'
  ])
  .config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

      // Local storage settings
      localStorageServiceProvider.setPrefix('flickrApp');

      $stateProvider

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'scripts/main/views/main.html',
          controller: 'MainCtrl'
      });

      // If none of the previous routes matches
      $urlRouterProvider.otherwise('/app/home');
  });
