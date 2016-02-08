/*jslint browser: true*/
/*global angular*/

(function () {

	'use strict';

	// projects.js
	angular.module('portfolioApp')
		.controller('ProjCtrl', ['projects', function (projects) {
			this.projects = projects.projects;
			this.featProjects = projects.getFeatProj();
		}]);

}());
