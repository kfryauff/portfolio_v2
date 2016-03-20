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
        title: 'BrewJump',
        client: 'Narendra Twiari',
        d: ['Discover', 'Develop'],
        links: [
          {
            label: 'Live Demo',
            url: 'http://web.stanford.edu/~kfryauff/Narendra_Twiari_1/index.html'
          },
          {
            label: 'Bitbucket',
            url: 'https://bitbucket.org/kfryauff/brewjump'
          }
        ],
        role: 'Freelance Developer',
        images: [
          'http://web.stanford.edu/~kfryauff/Narendra_Twiari_1/assets/images/logo.png',
          'images/projects/brewjump/brewjump1.png',
          'images/projects/brewjump/brewjump2.png',
          'images/projects/brewjump/brewjump3.png',
          'images/projects/brewjump/brewjump4.png',
          'images/projects/brewjump/brewjump5.png',
          'images/projects/brewjump/brewjump6.png',
          'images/projects/brewjump/brewjump7.png',
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a commodo lectus, ac dictum ex. Curabitur euismod placerat enim at accumsan. Integer porttitor blandit erat quis egestas. In rutrum tempus mi, vitae facilisis lorem ultricies eu. Fusce vitae eleifend elit, vitae ullamcorper nisi. Etiam neque felis, fringilla et felis feugiat, tincidunt faucibus lacus. Donec et ex at magna pulvinar dignissim. Vestibulum sollicitudin ex et elementum tempus. Nullam bibendum ornare metus, a rhoncus est ultricies in. Duis sit amet risus purus. Sed non augue nec elit ultricies rutrum interdum sit amet magna. Curabitur eget augue at ante eleifend lacinia a nec purus. Vestibulum lectus nibh, cursus non eleifend at, viverra a ante. Cras a metus ac urna tincidunt scelerisque.',
        skills: ['css', 'js', 'git', 'ps']
      },
      {
        featured: true,
        title: 'Second Example Project',
        client: 'Clide Client',
        d: ['Develop'],
        links: [
          {
            label: 'Live Demo',
            url: 'http://pretend-demo.com'
          },
          {
            label: 'Github',
            url: 'https://github.com'
          }
        ],
        role: 'Designer',
        images: [
          'http://lorempixel.com/250/250/technics/2',
          'http://lorempixel.com/250/250/abstract/2',
          'http://lorempixel.com/250/250/animals/2',
          'http://lorempixel.com/250/250/business/2',
          'http://lorempixel.com/250/250/city/2',
          'http://lorempixel.com/250/250/food/2'
        ],
        description: 'Pellentesque sollicitudin arcu purus, sit amet egestas eros semper nec. Etiam vel orci et risus porttitor iaculis ac a orci. Praesent sem dolor, sodales vel laoreet et, finibus ut leo. Sed vitae dolor ac justo ornare tempor ut eget felis. Integer aliquet sem nec sapien maximus congue. Praesent in sollicitudin turpis. Nam sit amet congue lectus, quis placerat risus. Etiam vitae cursus ante. Morbi quis felis sed purus interdum pretium ut in sem. Aliquam luctus finibus efficitur. Nullam efficitur nec urna ac imperdiet. Vestibulum elit ante, tincidunt eget rhoncus sit amet, aliquet non odio. Cras vel condimentum nisl.',
        skills: ['css', 'js', 'html']
      },
      {
        featured: true,
        title: 'Example Project 3',
        company: 'Company Example 3',
        role: 'Shinigami',
        images: [
          'http://lorempixel.com/250/250/technics/3',
          'http://lorempixel.com/250/250/abstract/3',
          'http://lorempixel.com/250/250/animals/3',
          'http://lorempixel.com/250/250/business/3',
          'http://lorempixel.com/250/250/city/3',
          'http://lorempixel.com/250/250/food/3'
        ],
        description: 'Nullam libero orci, dignissim et lacus rutrum, blandit rutrum metus. Donec ac congue urna. Donec sit amet erat imperdiet, venenatis nulla in, consectetur tortor. Sed rhoncus felis vitae tellus maximus pretium. Morbi commodo, libero ut congue rutrum, mi libero feugiat dolor, ut hendrerit leo ligula vitae orci. Donec interdum lectus ac erat maximus, eget sagittis neque malesuada. Etiam malesuada eu orci vel euismod. Pellentesque ac tristique eros. Nulla pretium tortor sed justo ullamcorper cursus et quis nibh. Nunc semper, ante vitae porttitor vestibulum, quam erat bibendum justo, non porttitor ligula ipsum eu urna. Vivamus ut tellus tortor. Suspendisse potenti. Mauris velit nunc, rhoncus eu neque quis, interdum consequat felis. Vestibulum quis tellus sem. Morbi dapibus mi orci.',
        skills: ['ai', 'ps']
      },
      {
        featured: false,
        title: 'Example Project 4',
        role: 'Project Manager',
        images: [
          'http://lorempixel.com/250/250/technics/4',
          'http://lorempixel.com/250/250/abstract/4',
          'http://lorempixel.com/250/250/animals/4',
          'http://lorempixel.com/250/250/business/4',
          'http://lorempixel.com/250/250/city/4',
          'http://lorempixel.com/250/250/food/4'
        ],
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam mattis mi et eros laoreet consectetur. Nullam gravida dignissim nibh, id mollis turpis volutpat vel. Nulla finibus quam a ipsum varius dignissim. Mauris nibh dui, pharetra mattis nunc eu, semper semper lectus. Mauris pharetra, mauris lobortis lacinia tincidunt, massa ligula eleifend odio, at semper massa orci eget lorem. Maecenas non quam sagittis, tincidunt neque vitae, dapibus sem.',
        skills: ['git', 'java']
      },
      {
        featured: false,
        title: 'Example Project 5',
        role: 'Rogue Ninja',
        images: [
          'http://lorempixel.com/250/250/technics/5',
          'http://lorempixel.com/250/250/abstract/5',
          'http://lorempixel.com/250/250/animals/5',
          'http://lorempixel.com/250/250/business/5',
          'http://lorempixel.com/250/250/city/5',
          'http://lorempixel.com/250/250/food/5'
        ],
        description: 'Praesent at dui sed ex ultricies rutrum. Mauris vehicula est non nisi iaculis finibus. Sed vel urna risus. Aenean nec metus nec turpis efficitur vehicula. Ut sed tristique libero. Aliquam non dui nec nisi dictum hendrerit. Nulla condimentum enim vitae ultrices tincidunt. Phasellus aliquam dui ut purus laoreet fermentum.',
        skills: ['css', 'js', 'angular']
      },
      {
        featured: false,
        title: 'Example Project 6',
        role: 'Acceptable Minority Friend',
        images: [
          'http://lorempixel.com/250/250/technics/6',
          'http://lorempixel.com/250/250/abstract/6',
          'http://lorempixel.com/250/250/animals/6',
          'http://lorempixel.com/250/250/business/6',
          'http://lorempixel.com/250/250/city/6',
          'http://lorempixel.com/250/250/food/6'
        ],
        description: 'In tempor porta neque vitae vehicula. Nulla vel luctus nunc, eu vehicula arcu. Morbi id finibus risus, nec porta diam. Integer rutrum tempor nisl vitae dictum. Vestibulum accumsan aliquam purus congue vehicula. Nunc rhoncus, ex eu pellentesque porttitor, neque nulla cursus libero, faucibus posuere sem nisl nec arcu. Nunc massa orci, viverra et lacus eu, hendrerit suscipit eros. Vestibulum sit amet molestie mi, mattis dapibus lectus. Nulla commodo malesuada mauris, a suscipit diam efficitur at. Sed pretium, nibh imperdiet aliquet tincidunt, tortor felis mattis dui, eu rhoncus sem sapien nec ligula. Nulla elementum consequat consectetur. Proin non lacinia neque, sit amet venenatis sapien. Nam nisl mauris, aliquam vulputate vehicula eu, pulvinar tempus est.',
        skills: ['html', 'css', 'js', 'angular']
      },
      {
        featured: false,
        title: 'Example Project 7',
        role: 'Huntress',
        images: [
          'http://lorempixel.com/250/250/technics/7',
          'http://lorempixel.com/250/250/abstract/7',
          'http://lorempixel.com/250/250/animals/7',
          'http://lorempixel.com/250/250/business/7',
          'http://lorempixel.com/250/250/city/7',
          'http://lorempixel.com/250/250/food/7'
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel dui ultricies, tempus massa vitae, ultrices orci. Donec sed bibendum turpis. Vestibulum convallis mi ligula, sed cursus diam varius vitae. Vivamus tincidunt vehicula volutpat. Integer cursus aliquam bibendum. In non posuere risus. Nulla mi nisi, cursus non auctor interdum, laoreet nec risus. Mauris finibus molestie ipsum. Nullam lacinia justo turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac accumsan metus, vitae molestie diam. Curabitur malesuada nibh volutpat viverra interdum.',
        skills: ['css', 'js']
      },
      {
        featured: false,
        title: 'Example Project 8',
        role: 'Excalibur',
        images: [
          'http://lorempixel.com/250/250/technics/8',
          'http://lorempixel.com/250/250/abstract/8',
          'http://lorempixel.com/250/250/animals/8',
          'http://lorempixel.com/250/250/business/8',
          'http://lorempixel.com/250/250/city/8',
          'http://lorempixel.com/250/250/food/8'
        ],
        description: 'Suspendisse a est sit amet sem feugiat iaculis. Vestibulum enim leo, tristique eget nibh eget, aliquam tincidunt risus. Duis porttitor nulla vitae massa condimentum rhoncus. Pellentesque lorem nibh, condimentum id venenatis eu, tincidunt at odio. Nunc ultrices ligula vitae sodales malesuada. Vestibulum vulputate velit orci, et placerat sapien sollicitudin quis. Duis at orci ornare, tincidunt libero vestibulum, egestas dolor. Ut et erat quis nunc placerat consectetur eu ac tortor. Aliquam sagittis vehicula lectus, tincidunt egestas enim fermentum id. Curabitur ultricies consequat commodo. Quisque efficitur enim mi, in varius magna hendrerit a. Proin eu tellus ante.',
        skills: ['css', 'js']
      },
      {
        featured: false,
        title: 'Example Project 9',
        role: 'Prince of Thieves',
        images: [
          'http://lorempixel.com/250/250/technics/9',
          'http://lorempixel.com/250/250/abstract/9',
          'http://lorempixel.com/250/250/animals/9',
          'http://lorempixel.com/250/250/business/9',
          'http://lorempixel.com/250/250/city/9',
          'http://lorempixel.com/250/250/food/9'
        ],
        description: 'Duis tincidunt hendrerit ipsum, a vulputate nibh tristique eu. Vestibulum vulputate et eros sodales mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam erat turpis, euismod quis mauris vitae, volutpat volutpat ipsum. Nunc orci orci, imperdiet ac gravida non, porttitor ac erat. Vivamus finibus elit dui, vel imperdiet nisl lacinia a. Suspendisse pretium pharetra risus. Aliquam erat volutpat. Morbi ac ex ac magna eleifend rutrum. Donec lacinia iaculis rhoncus.',
        skills: ['html', 'css', 'js']
      },
      {
        featured: false,
        title: 'Example Project 10',
        role: 'Mononokehime',
        images: [
          'http://lorempixel.com/250/250/technics/10',
          'http://lorempixel.com/250/250/abstract/10',
          'http://lorempixel.com/250/250/animals/10',
          'http://lorempixel.com/250/250/business/10',
          'http://lorempixel.com/250/250/city/10',
          'http://lorempixel.com/250/250/food/10'
        ],
        description: 'Ut pellentesque, quam ut cursus consequat, purus augue euismod urna, commodo fermentum arcu mi vel orci. Donec vel orci consectetur, maximus sem eu, eleifend ex. Mauris iaculis velit arcu, vel volutpat nunc molestie quis. Morbi tincidunt ullamcorper tincidunt. Ut ac imperdiet dui. Suspendisse sem felis, iaculis et fermentum et, sagittis et nibh. Proin in ligula nec libero vehicula aliquam non non quam. Curabitur ultrices ipsum sed finibus venenatis. Nulla lacus velit, ornare in egestas ut, auctor et nunc. Quisque molestie, risus in tincidunt suscipit, tortor enim posuere enim, vel consectetur erat mauris at nulla. Nullam varius ex quis purus vulputate interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus quis sem vitae metus pulvinar ornare sed eget justo.',
        skills: ['html', 'php', 'css']
      },
      {
        featured: false,
        title: 'Example Project 11',
        role: 'Starch Jedi',
        images: [
          'http://lorempixel.com/400/400/abstract/1/',
          'http://lorempixel.com/250/250/cats/1',
          'http://lorempixel.com/250/250/nightlife/',
          'http://lorempixel.com/250/250/fashion/',
          'http://lorempixel.com/250/250/nature/',
          'http://lorempixel.com/250/250/transport/'
        ],
        description: 'Pellentesque dictum est id ipsum faucibus suscipit. Mauris in luctus nunc, eget euismod mi. Fusce diam dolor, fermentum sit amet urna sit amet, tempus euismod nibh. Praesent consequat laoreet egestas. Maecenas tempor velit sit amet lorem condimentum efficitur. Sed mollis ante sed quam pretium, eu vehicula dolor auctor. Integer iaculis convallis molestie. Morbi ullamcorper, nisi sit amet maximus tincidunt, odio nisl commodo nulla, a rutrum tortor lectus a nulla. Sed vitae justo tellus. Phasellus dapibus ante id ipsum sollicitudin aliquam. Fusce malesuada libero in nisl dictum luctus. Integer lacus lorem, imperdiet id sodales sit amet, ullamcorper vel risus. Suspendisse at eros risus. Suspendisse quis eros vel eros tincidunt scelerisque. Maecenas dolor lacus, gravida sit amet accumsan pharetra, hendrerit hendrerit nisl.',
        skills: ['html', 'js', 'node']
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
        label: 'CSS',
        skill: 'Cascading Style Sheets',
        description: 'A cascading style sheet (CSS) is a Web page derived from multiple sources with a defined order of precedence where the definitions of any style element conflict.',
        percentage: 75
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
        percentage: 45
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
        image: 'images/socialmedia/Email.png'
      },
      linkedin: {
        link: '/',
        image: 'images/socialmedia/Linkedin.png'
      },
      gplus: {
        link: '/',
        image: 'images/socialmedia/Googleplus.png'
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
    'ui.bootstrap',
    'angular-carousel',
    'angular.directives-round-progress',
    'duScroll',

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      // .otherwise({
      //   redirectTo: '/'
      // });
  })
  .value('projects', projectsValue)
  .value('skills', skillsValue)
  .value('profile', profileData)
  .value('duScrollDuration', 2000)
  .value('duScrollOffset', 50)
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
