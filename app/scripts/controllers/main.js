'use strict';

/**
 * @ngdoc function
 * @name cNoteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cNoteApp
 */
angular.module('cNoteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
