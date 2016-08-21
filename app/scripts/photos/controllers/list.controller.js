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

PhotosListCtrl.$inject = ['$scope', '$stateParams', 'photos'];

function PhotosListCtrl($scope, $stateParams, photos) {
    $scope.photos = photos;
    $scope.tags = $stateParams.tags;
    $scope.userId = $stateParams.userId;

    $scope.currentPage = 1;
    $scope.itemsPerPage = 10;

}
