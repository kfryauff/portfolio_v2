/*jslint browser: true*/
/*global angular*/

(function() {

  'use strict';

  /**
   * @ngdoc overview
   * @name portfolioApp
   * @description
   * # portfolioApp
   *
   * Main module of the application.
   */

  // value objects :
  var projectsValue = {
    projects: [
      {
        featured: true,
        title: 'Example Project 1',
        company: 'Company Example',
        images: ['http://lorempixel.com/300/300/technics/1'],
        description: 'This is a description of example project 1',
        skills: ['css', 'js']
      },
      {
        featured: true,
        title: 'Example Project 2',
        images: ['http://lorempixel.com/300/300/technics/2'],
        description: 'This is a description of example project 2',
        skills: ['css', 'js']
      },
      {
        featured: true,
        title: 'Example Project 3',
        images: ['http://lorempixel.com/300/300/technics/3'],
        description: 'This is a description of example project 3',
        skills: ['css', 'js']
      },
      {
        featured: false,
        title: 'Example Project 4',
        images: ['http://lorempixel.com/300/300/technics/4'],
        description: 'This is a description of example project 4',
        skills: ['css', 'js']
      },
      {
        featured: false,
        title: 'Example Project 5',
        images: ['http://lorempixel.com/300/300/technics/5'],
        description: 'This is a description of example project 5',
        skills: ['css', 'js']
      },
      {
        featured: false,
        title: 'Example Project 6',
        images: ['http://lorempixel.com/300/300/technics/6'],
        description: 'This is a description of example project 6',
        skills: ['css', 'js']
      },
      {
        featured: false,
        title: 'Example Project 7',
        images: ['http://lorempixel.com/300/300/technics/7'],
        description: 'This is a description of example project 7',
        skills: ['css', 'js']
      },
      {
        featured: false,
        title: 'Example Project 8',
        images: ['http://lorempixel.com/300/300/technics/8'],
        description: 'This is a description of example project 8',
        skills: ['css', 'js']
      },
      {
        featured: false,
        title: 'Example Project 9',
        images: ['http://lorempixel.com/300/300/technics/9'],
        description: 'This is a description of example project 9',
        skills: ['css', 'js']
      },
      {
        featured: false,
        title: 'Example Project 10',
        images: ['http://lorempixel.com/300/300/technics/10'],
        description: 'This is a unique description of example project 10',
        skills: ['css', 'js']
      },
      {
        featured: false,
        title: 'Example Project 11',
        images: ['http://lorempixel.com/400/200/abstract/1/'],
        description: 'This is a another unique description of example project 11',
        skills: ['css', 'html']
      }
    ],
    getFeatProj: function () {
      var featCount = 0,
          i = 0,
          featProj = [],
          projects = this.projects;
      while(featCount < 3 && i < projects.length) {
        if(projects[i].featured) {
          featProj.push(projects[i]);
          featCount += 1;
        }
        i += 1;
      }
      return featProj;
    }
  },

  skillsValue = {
    skills:[
      {
        skillID: 'css',
        abbrev: 'CSS',
        skill: 'Cascading Style Sheets',
        level: 75
      },
      {
        skillID: 'js',
        abbrev: 'JS',
        skill: 'Javascript',
        level: 50
      },
      {
        skillID: 'html',
        abbrev: 'HTML',
        skill: 'Hyper Text Markup Language',
        level: 75
      },
      {
        skillID: 'Git',
        abbrev: 'git',
        skill: 'Git / Github',
        level: 60
      },
      {
        skillID: 'ps',
        abbrev: 'Ps',
        skill: 'Adobe Photoshop',
        level: 85
      },
      {
        skillID: 'ai',
        abbrev: 'Ai',
        skill: 'Adobe Illustrator',
        level: 45
      },
      {
        skillID: 'test1',
        abbrev: 'test1',
        skill: 'test1',
        level: 10
      },
      {
        skillID: 'test2',
        abbrev: 'test2',
        skill: 'test2',
        level: 30
      },
      {
        skillID: 'test3',
        abbrev: 'test3',
        skill: 'test3',
        level: 50
      },
      {
        skillID: 'test4',
        abbrev: 'test4',
        skill: 'test4',
        level: 70
      },
      {
        skillID: 'test5',
        abbrev: 'test5',
        skill: 'test5',
        level: 90
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
      } else if (skillLevel < 40) {
        return 's2';
      } else if (skillLevel < 60) {
        return 's3';
      } else if (skillLevel < 80) {
        return 's4';
      } else {
        return 's5';
      }
    }
  },
  profileData = {
    name: 'K. Fryauff',
    tag: 'Developer | Designer',
    email: 'email@address.com',
    phone: '000-000-0000',
    address: '123 Address, City, State',
    location: 'Bay Area, CA, USA',
    image: 'http://lorempixel.com/100/100/animals/8/',
    socialMedia: {
      email: {
        link: '/',
        image: '../images/socialmedia/Email.png'
      },
      linkedin: {
        link: '/',
        image: '../images/socialmedia/Linkedin.png'
      },
      gplus: {
        link: '/',
        image: '../images/socialmedia/Googleplus.png'
      }
    }
  };


angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'duScroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      .otherwise({
        redirectTo: '/'
      });
  })
  .value('projects', projectsValue)
  .value('skills', skillsValue)
  .value('profile', profileData)
  .value('duScrollDuration', 2000)
  .value('duScrollOffset', 30)
  .run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
  }]);
  // .controller('headerCtrl', ['$anchorScroll', '$location', '$scope',
  //   function ($anchorScroll, $location, $scope) {
  //     $scope.gotoAnchor = function(newHash) {
  //       if ($location.hash() !== newHash) {
  //         // set the $location.hash to `newHash` and
  //         // $anchorScroll will automatically scroll to it
  //         $location.hash(newHash);
  //       } else {
  //         // call $anchorScroll() explicitly,
  //         // since $location.hash hasn't changed
  //         $anchorScroll();
  //       }
  //     };
  //   }
  // ]);

}());
