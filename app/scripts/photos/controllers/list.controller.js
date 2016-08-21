'use strict';

/**
 * @ngdoc function
 * @name flickrApp.photos:PhotosListCtrl
 * @description
 * Controller for displaying a list of photos
 */
angular
    .module('flickrApp.photos')
    .controller('PhotosListCtrl', PhotosListCtrl);

PhotosListCtrl.$inject = ['$scope', 'photos'];

function PhotosListCtrl($scope, photos) {
    $scope.photos = photos;
}
