'use strict';

/**
 * @ngdoc function
 * @name flickrApp.photos:PhotosSearchCtrl
 * @description
 * Controller to resolve the search of an interesting photo
 */
angular
    .module('flickrApp.photos')
    .controller('PhotosSearchCtrl', PhotosSearchCtrl);

PhotosSearchCtrl.$inject = ['$scope', '$stateParams', 'localStorageService', 'photo'];

function PhotosSearchCtrl($scope, $stateParams, localStorageService, photo) {
    var savedPhotosKey = 'savedPhotos';

    $scope.photo = photo;
    $scope.tags = $stateParams.tags;
    $scope.savedPhotos = localStorageService.get(savedPhotosKey) || [];

    $scope.sortOrder = {
        selected: 'views',
        options: [
            {name: 'Views', value: 'views'},
            {name: 'Taken', value: 'datetaken'},
            {name: 'Uploaded', value: 'dateupload'},
            {name: 'Owner', value: 'owner'}
        ]
    };

    function activate() {
        // If a photo was successfully retrieved
        if($scope.photo.id) {
            // Add the photo to the saved photos array
            $scope.savedPhotos.push($scope.photo);
            localStorageService.set(savedPhotosKey, $scope.savedPhotos);
        }
    }

    activate();
}
