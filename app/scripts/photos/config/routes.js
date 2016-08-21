'use strict';

angular
  .module('flickrApp.photos')
  .config(function ($stateProvider) {

      $stateProvider

      .state('app.photos', {
          url: '/photos',
          abstract: true,
          templateUrl: 'scripts/photos/views/photos.html'
      })

      .state('app.photos.search', {
          url: '/search',
          templateUrl: 'scripts/photos/views/search.html',
          controller: 'PhotosSearchCtrl',
          params: {
              tags: '',
              userId: ''
          },
          resolve: {
              photo: ['$stateParams', 'PhotosFactory', function ($stateParams, PhotosFactory) {
                  return PhotosFactory.getMostInterestingPhotoByTagsAndUserId($stateParams.tags, $stateParams.userId);
              }]
          }
      })

      .state('app.photos.list', {
          url: '/list/:tags/:userId',
          templateUrl: 'scripts/photos/views/list.html',
          controller: 'PhotosListCtrl',
          resolve: {
              photos: ['$stateParams', 'PhotosFactory', function ($stateParams, PhotosFactory) {
                  return PhotosFactory.getPhotosByTagsAndUserId($stateParams.tags, $stateParams.userId);
              }]
          }
      });

  });
