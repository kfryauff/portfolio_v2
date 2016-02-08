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
        image: 'http://lorempixel.com/300/300/technics/1',
        description: 'This is a description of example project 1',
        skills: []
      },
      {
        featured: true,
        title: 'Example Project 2',
        image: 'http://lorempixel.com/300/300/technics/2',
        description: 'This is a description of example project 2'
      },
      {
        featured: true,
        title: 'Example Project 3',
        image: 'http://lorempixel.com/300/300/technics/3',
        description: 'This is a description of example project 3'
      },
      {
        featured: false,
        title: 'Example Project 4',
        image: 'http://lorempixel.com/300/300/technics/4',
        description: 'This is a description of example project 4'
      },
      {
        featured: false,
        title: 'Example Project 5',
        image: 'http://lorempixel.com/300/300/technics/5',
        description: 'This is a description of example project 5'
      },
      {
        featured: false,
        title: 'Example Project 6',
        image: 'http://lorempixel.com/300/300/technics/6',
        description: 'This is a description of example project 6'
      },
      {
        featured: false,
        title: 'Example Project 7',
        image: 'http://lorempixel.com/300/300/technics/7',
        description: 'This is a description of example project 7'
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
    skills: [
      {
        skill_id: 'sk1',
        skill: 'Skill #1',
        level: 8.5
      },
      {
        skill_id: 'sk2',
        skill: 'Skill #2',
        level: 8.5
      },
      {
        skill_id: 'sk3',
        skill: 'Skill #3',
        level: 8.5
      },
      {
        skill_id: 'sk4',
        skill: 'Skill #4',
        level: 8.5
      },
      {
        skill_id: 'sk5',
        skill: 'Skill #5',
        level: 8.5
      }
    ]
  };

  angular
    .module('portfolioApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch' //,
      // 'duScroll'
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
    .run(['$anchorScroll', function($anchorScroll) {
      $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
    }])
    .controller('headerCtrl', ['$anchorScroll', '$location', '$scope',
      function ($anchorScroll, $location, $scope) {
        $scope.gotoAnchor = function(newHash) {
          if ($location.hash() !== newHash) {
            // set the $location.hash to `newHash` and
            // $anchorScroll will automatically scroll to it
            $location.hash(newHash);
          } else {
            // call $anchorScroll() explicitly,
            // since $location.hash hasn't changed
            $anchorScroll();
          }
        };
      }
    ]);

}());
