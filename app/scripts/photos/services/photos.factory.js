'use strict';

/**
 * @ngdoc function
 * @name flickrApp.photos:PhotosFactory
 * @description
 * Factory to manage photos operations from an easy interface
 */
angular
    .module('flickrApp.photos')
    .factory('PhotosFactory', PhotosFactory);

PhotosFactory.$inject = ['PhotosResource'];

function PhotosFactory(PhotosResource) {

    /**
     * Search photos with tags and userId passed as parameter
     * @param  {string}  tags   tags to search for
     * @param  {string}  userId the userId of the photos owner
     * @return {promise} a promise with the found photos
     */
    function getPhotosByTagsAndUserId(tags, userId) {
        return PhotosResource.getPhotosByTagsAndUserId({ tags: tags, userId: userId}).$promise.then(function(response) {
            return response.photos.photo;
        });
    }

    /**
     * Search for the most interesting photo with tags and userId passed as parameter
     * @param  {string}  tags   tags to search for
     * @param  {string}  userId the userId of the photo owner
     * @return {promise} a promise with the found photo
     */
    function getMostInterestingPhotoByTagsAndUserId(tags, userId) {
        return PhotosResource.getMostInterestingPhotoByTagsAndUserId({ tags: tags, userId: userId}).$promise.then(function(response) {
            return response.photos.photo;
        });
    }

    var factory = {
        getPhotosByTagsAndUserId: getPhotosByTagsAndUserId,
        getMostInterestingPhotoByTagsAndUserId: getMostInterestingPhotoByTagsAndUserId
    };

    return factory;
}
