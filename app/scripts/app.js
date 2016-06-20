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

angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'angular-carousel',
    'angular.directives-round-progress',
    'duScroll',
    'ajoslin.promise-tracker',

  ])
  .config(function ($routeProvider) { //, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/landing', {
        templateUrl: 'views/landing.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/featured', {
        templateUrl: 'views/featured.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/skills-resume', {
        templateUrl: 'views/skills-resume.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

      // $locationProvider.html5Mode(true);
      // $locationProvider.hashPrefix('!');

  })
  .value('duScrollDuration', 2000)
  .value('duScrollOffset', 10)
  .value('windowhref', window.location.href)
  .run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
  }]);

}());
