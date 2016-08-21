'use strict';

/**
 * @ngdoc directive
 * @name flickrApp.main:BackButtonDirective
 * @description
 * Back button directive to navigate one step back
 * in the navigation history
 */

angular
    .module('flickrApp.main')
    .directive('backButton', BackButtonDirective);

BackButtonDirective.$inject = [];

function BackButtonDirective() {
    return {
        restrict: 'E',
        template: '<span ng-click="goBack()" style="cursor:pointer">&laquo Back</span>',
        link: function(scope) {
            scope.goBack = function() {
                window.history.back();
            };
        }
    };
}
