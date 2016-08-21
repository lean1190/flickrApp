'use strict';

/**
 * @ngdoc function
 * @name flickrApp.main:MainCtrl
 * @description
 * Controller for managing the funcionality available
 * across all the application
 */
angular
    .module('flickrApp.main')
    .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', '$state'];

function MainCtrl($scope, $state) {

    $scope.searchForm = {
        tags: '',
        userId: ''
    };

    /**
     * Clears the form input fields
     */
    $scope.clearForm = function() {
        $scope.searchForm = {
            tags: '',
            userId: ''
        };
    };

    /**
     * Redirects to the state that shows the results
     */
    $scope.searchPhotos = function() {
        $state.go('app.photos.search', { tags: $scope.searchForm.tags, userId: $scope.searchForm.userId });
        $scope.clearForm();
    };
}
