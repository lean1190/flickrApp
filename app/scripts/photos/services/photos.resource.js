'use strict';

/**
 * @ngdoc function
 * @name flickrApp.photos:PhotosResource
 * @description
 * Resource to manage http calls to the Flickr API
 */
angular
    .module('flickrApp.photos')
    .factory('PhotosResource', PhotosResource);

PhotosResource.$inject = ['$resource', 'ENV'];

function PhotosResource($resource, ENV) {

    return $resource(ENV.apiEndpoint, {}, {
        getPhotosByTagsAndUserId: {
            method: 'GET',
            params: {
                'method': 'flickr.photos.search',
                'format': 'json',
                'nojsoncallback': 1,
                'api_key': ENV.apiKey,
                'sort': 'interestingness-desc',                
                'extras': 'url_q'
            }
        },
        getMostInterestingPhotoByTagsAndUserId: {
            method: 'GET',
            params: {
                'method': 'flickr.photos.search',
                'format': 'json',
                'nojsoncallback': 1,
                'api_key': ENV.apiKey,
                'sort': 'interestingness-desc',
                'per_page': 1,
                'extras': 'date_upload, date_taken, owner_name, views, url_q'
            }
        }
    });
}
