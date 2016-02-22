/*jslint browser: true*/
/*global angular*/

(function () {

	'use strict';

	/**
	 * @ngdoc function
	 * @name portfolioApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the portfolioApp
	 */
	angular.module('portfolioApp')
	  .controller('MainCtrl', ['$scope', 'profile', function ($scope, profile) {
	    this.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
			$scope.profile = profile;
			$scope.updatedDate = '10/02/2015';
	  }]);


}());
