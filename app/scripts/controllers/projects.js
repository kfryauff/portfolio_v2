/*jslint browser: true*/
/*global angular*/

(function () {

	'use strict';

	// projects.js
	angular.module('portfolioApp')
		.controller('ProjCtrl', ['projects', 'skills', function (projects, skills) {
			this.projects = projects.projects;
			this.featProjects = projects.getFeatProj();
			this.skills = skills.skills;
		}]);
		// .filter('projFilter', ['$filters', function($filters) {
		// 	this.filters = $filters;
		// 	return function(projects, search) {
		// 		var filtered = [];

		// 		return filtered;
		// 	};
		// }]);

}());
