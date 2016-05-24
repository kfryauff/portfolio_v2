/*jslint browser: true*/
/*global angular*/

(function () {

	'use strict';

  var projectsValue = {
    projects: [
      {
        featured: true,
        title: 'Mobile Web Development: Bigotires',
        company: 'Moovweb',
        client: 'Bigotires',
        d: ['Develop', 'Deploy'],
        links: [
          {
            label: 'Live Site:',
            url: 'http://m.bigotires.com/'
          }
        ],
        role: 'Mobile Web Developer',
        images: [

        ],
        description: 'Working as a Moovweb Mobile Web Developer, I contributed to the transformation of the desktop bigotires site into the mobile adapted version, viewable from the live site link. This project was built on the Moovweb platform and included extensive manipulation of html with javascript and sass. My contribution included the Product Detail Pages (PDP), Search Results Pages, Brand pages, the Store Locator, and several others. Along with these mentioned pages, I designed and built a custom comparison functionality based on the desktop site\'s equivalent behaviour.',
        skills: ['html', 'css', 'sass', 'js']
      },
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
        description: 'As a Freelance Developer, I developed a shell project & basic UI from the client\'s original design. Additionally, I was tasked with extrapolating a responsive design for mobile and device screens.  This project uses a very minimalistic stack with the intention of being flexible and easily modified for future development.',
        skills: ['html', 'css', 'js', 'git', 'ps']
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
  };


	// projects.js
	angular.module('portfolioApp')
		.value('projects', projectsValue);

}());
