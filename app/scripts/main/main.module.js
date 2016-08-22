'use strict';

/**
 * @ngdoc overview
 * @name flickrApp.home
 * @description
 * # flickrApp.main
 *
 * Module for setting the main application structure and common behavior
 */
angular
    .module('flickrApp.main', [])
    .config(function ($validationProvider) {
        
        /* Setup a custom tags validation expression */
        var tagsExpression = {
            tags: /^\w(\s*,?\s*\w)*$/
        },
        validMsg = {
            tags: {
                error: 'This are not tags',
                success: 'Tags okey'
            }
        };

        $validationProvider.setExpression(tagsExpression).setDefaultMsg(validMsg);
    });
