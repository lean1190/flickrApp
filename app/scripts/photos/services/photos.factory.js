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

PhotosFactory.$inject = ['$log', 'PhotosResource'];

function PhotosFactory($log, PhotosResource) {

    /**
     * Search photos with tags and userId passed as parameter.
     * Optionally a page number can be passed
     * @param  {string}  tags   tags to search for
     * @param  {string}  userId the userId of the photos owner
     * @param  {number}  page   the page number
     * @return {promise} a promise with the found photos
     */
    function getPhotosByTagsAndUserId(tags, userId, page) {
        // Set a default page
        page = page || 1;
        return PhotosResource.getPhotosByTagsAndUserId({
            tags: tags,
            user_id: userId,
            per_page: 5,
            page: page
        }).$promise.then(function(response) {
            return response.photos;
        }, function(error) {
            $log.error('An error ocurred retrieving photos', error);
            return error;
        });
    }

    /**
     * Search for the most interesting photo with tags and userId passed as parameter
     * @param  {string}  tags   tags to search for
     * @param  {string}  userId the userId of the photo owner
     * @return {promise} a promise with the found photo or an empty object
     */
    function getMostInterestingPhotoByTagsAndUserId(tags, userId) {
        return PhotosResource.getMostInterestingPhotoByTagsAndUserId({
            tags: tags,
            user_id: userId
        }).$promise.then(function(response) {
            // If any photos were retrieved
            if (response.photos && response.photos.photo.length > 0) {
                return response.photos.photo[0];
            }
            return {};
        }, function(error) {
            $log.error('An error ocurred retrieving the most interesting photo', error);
            return error;
        });
    }

    var factory = {
        getPhotosByTagsAndUserId: getPhotosByTagsAndUserId,
        getMostInterestingPhotoByTagsAndUserId: getMostInterestingPhotoByTagsAndUserId
    };

    return factory;
}
