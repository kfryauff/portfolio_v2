/*jslint browser: true*/
/*global angular*/

(function () {

	'use strict';

  var skillsValue = {
    skills:[
      {
        skillID: 'css',
        label: 'CSS',
        skill: 'Cascading Style Sheets',
        description: 'A cascading style sheet (CSS) is a Web page derived from multiple sources with a defined order of precedence where the definitions of any style element conflict.',
        percentage: 70
      },
      {
        skillID: 'sass',
        label: 'Sass',
        skill: 'Syntactically Awesome Style Sheets',
        description: 'Sass is an extension of CSS that adds power and elegance to the basic language. It allows you to use variables, nested rules, mixins, inline imports, and more, all with a fully CSS-compatible syntax.',
        percentage: 65
      },
      {
        skillID: 'js',
        label: 'JS',
        skill: 'Javascript',
        description: 'an object-oriented computer programming language commonly used to create interactive effects within web browsers.',
        percentage: 50
      },
      {
        skillID: 'php',
        label: 'PHP',
        skill: 'PHP',
        description: 'PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language.',
        percentage: 35
      },
      {
        skillID: 'angular',
        label: 'Angular',
        skill: 'AngularJS',
        description: 'AngularJS is a JavaScript framework. It can be added to an HTML page with a <script> tag. AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions.',
        percentage: 45
      },
      {
        skillID: 'node',
        label: 'Node',
        skill: 'NodeJS',
        description: 'AngularJS is a JavaScript framework. It can be added to an HTML page with a <script> tag. AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions.',
        percentage: 60
      },
			{
        skillID: 'gulp',
        label: 'Gulp',
        skill: 'Gulp',
        description: 'Gulp is a streaming build system, by using node’s streams file manipulation is all done in memory, and a file isn’t written until you tell it to do so.',
        percentage: 50
      },
      {
        skillID: 'html',
        label: 'HTML',
        skill: 'Hyper Text Markup Language',
        description: 'Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.',
        percentage: 75
      },
      {
        skillID: 'git',
        label: 'Git',
        skill: 'Git / Github / Bitbucket',
        description: 'The purpose of Git is to manage a project, or a set of files, as they change over time. Git stores this information in a data structure called a repository. A git repository contains, among other things, the following: A set of commit objects. A set of references to commit objects, called heads.',
        percentage: 60
      },
      {
        skillID: 'ps',
        label: 'Ps',
        skill: 'Adobe Photoshop',
        description: 'Adobe Photoshop is a raster graphics editor developed and published by Adobe Systems.',
        percentage: 85
      },
      {
        skillID: 'ai',
        label: 'Ai',
        skill: 'Adobe Illustrator',
        description: 'Adobe Illustrator is a vector graphics editor developed and marketed by Adobe Systems.',
        percentage: 45
      },
      {
        skillID: 'java',
        label: 'Java',
        skill: 'Java',
        description: 'Java is a programming language expressly designed for use in the distributed environment of the Internet. It was designed to have the "look and feel" of the C++ language, but it is simpler to use than C++ and enforces an object-oriented programming model',
        percentage: 75
      },
      {
        skillID: 'd3',
        label: 'D3.js',
        skill: 'Data-Driven Documents',
        description: 'D3.js is a JavaScript library for manipulating documents based on data. \nhttps://d3js.org/',
        percentage: 50
      }
    ],
    getSkill: function(skillID) {
      var i,
          skills = this.skills;
      for(i = 0; i < skills.length; i += 1) {
        if(skills[i].skillID === skillID) {
          return i;
        }
      }
      return -1;
    },
    getColor: function(skillLevel) {
      if(skillLevel < 20) {
        return 's1';
      } else if (skillLevel < 50) {
        return 's2';
      } else if (skillLevel < 70) {
        return 's3';
      } else if (skillLevel < 90) {
        return 's4';
      } else {
        return 's5';
      }
    },
    getPercentagebyID: function (skillID) {
      var skillObj = this.skills[this.getSkill(skillID)];
      return skillObj.percentage;
    },
    getColorbyID: function(skillID) {
      var skillPercentage = this.getPercentagebyID(skillID);
      var colorClass = this.getColor(skillPercentage);
      return colorClass;
    },
    comparator: function(skillID) {
      return this.getPercentagebyID(skillID);
    }
  };

	angular.module('portfolioApp')
		.value('skills', skillsValue);

}());
