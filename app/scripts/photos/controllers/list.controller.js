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

PhotosListCtrl.$inject = ['$scope', '$stateParams', 'photos', 'PhotosFactory'];

function PhotosListCtrl($scope, $stateParams, photos, PhotosFactory) {
    $scope.photos = photos.photo;
    $scope.tags = $stateParams.tags;
    $scope.userId = $stateParams.userId;

    $scope.pagination = {
        total: parseInt(photos.total),
        currentPage: 1,
        itemsPerPage: 5
    };

    /**
     * Retrieves more photos from the server passing
     * a page as parameter
     * @param  {number} newPageNumber the page number to retrieve
     */
    $scope.pageChanged = function(newPageNumber) {
        PhotosFactory.getPhotosByTagsAndUserId($scope.tags, $scope.userId, newPageNumber).then(function(photos) {
            $scope.photos = photos.photo;
        });
    };
}
