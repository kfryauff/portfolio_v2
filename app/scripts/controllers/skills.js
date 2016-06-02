/*jslint browser: true*/
/*global angular*/

(function () {

	'use strict';

	// projects.js
	angular.module('portfolioApp')
		.controller('SkillsCtrl', ['skills', 'resumeLoc', function (skills, resumeLoc) {

			this.skills = skills.skills;
      this.getColor = skills.getColor;
			this.resumeLoc = resumeLoc;
		}]);

}());
