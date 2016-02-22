/*jslint browser: true*/
/*global angular*/

(function () {

	'use strict';

	// projects.js
	angular.module('portfolioApp')
		.controller('SkillsCtrl', ['skills', function (skills) {

			this.skills = skills.skills;
      this.getColor = skills.getColor;

		}]);

}());
