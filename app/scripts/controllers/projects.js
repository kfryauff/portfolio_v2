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
			var projCtrl = this;
			this.projSearchComparator = function (actual, expected) {
				var i, j, skill, id,
					skillsArray = actual.skills,
					skills = projCtrl.skills;
				for(i = 0; i < actual.length; i += 1) {
					if(actual[i].indexOf(expected) !== -1) {
						return true;
					}
				}
				
				for(i = 0; i < skillsArray.length; i += 1) {
					id = skills.getSkill(skillsArray[i]);
					if(id === -1) {break;}
					skill = skills.skills[id];
					for(j = 0; j < skill.length; j += 1) {
						if(skill[j].indexOf(expected) !== -1){
							return true;
						}
					}
				}
				return false;
			};
		}]);

}());
