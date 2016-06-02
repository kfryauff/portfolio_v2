/*jslint browser: true*/
/*global angular*/

(function () {

	'use strict';

  var projectsData = {
    projects: [
			{
        featured: true,
        title: 'Mobile Web Dev: Escalations',
        company: 'Moovweb',
        client: 'Fairmont Proof of Concept',
        d: ['Discover', 'Design', 'Develop', 'Deploy'],
        links: [
          {
            label: 'Moovweb Site',
            url: 'http://www.moovweb.com/'
          }
        ],
        role: 'Mobile Web Developer',
        images: [
					'/assets/images/projects/moovweb/fairmont/fairmont0.png',
        ],
        description: 'As part of Moovweb\'s Escalations Team, I worked on several different special projects, including proof of concept projects focused on performance optimizations. The work I did for these projects included integrating technologies like Gulp and Node into the Moovweb platform. I executed solutions including inlining above the fold css, gulp tasks for sass to css compilation, and optimizing images using the Moovweb custom languages.',
        skills: ['html', 'css', 'sass', 'js', 'git', 'node', 'gulp'],
      },
			{
        featured: true,
        title: 'Mobile Web Dev: Client Services',
        company: 'Moovweb',
        client: 'Various Clients',
        d: ['Discover', 'Design', 'Develop', 'Deploy'],
        links: [
          {
            label: 'Moovweb Site',
            url: 'http://www.moovweb.com/'
          }
        ],
        role: 'Mobile Web Developer',
        images: [
					'/assets/images/projects/moovweb/moovweb_1.png',
					'/assets/images/projects/moovweb/coverfx/coverfx0.png',
					'/assets/images/projects/moovweb/nutrisystem/nutrisystem0.png',
					'/assets/images/projects/moovweb/kendrascott/kendrascott0.png',
					'/assets/images/projects/moovweb/orvis/orvis0.png',
					'/assets/images/projects/moovweb/basspro/basspro0.png',
					'/assets/images/projects/moovweb/hiscox/hiscox0.png',
					'/assets/images/projects/moovweb/fingerhut/fingerhut0.png',
        ],
        description: 'Moovweb is a San Francisco startup that works to optimize the mobile web experience by transforming desktop sites and checkout flows. Working as a Moovweb Mobile Web Developer, I assisted in the construction and maintenance of several different mobile web apps, including (but not limited to): Sterling Jewlers, Epson, KendraScott, Nutrisystem, Orvis, Pepboys, Petco, White House Black Market, etc.',
        skills: ['html', 'css', 'sass', 'js', 'git', 'node'],
      },
      {
        featured: true,
        title: 'Mobile Web Dev: Bigotires',
        company: 'Moovweb',
        client: 'Bigotires',
        d: ['Discover', 'Design', 'Develop', 'Deploy'],
        links: [
          {
            label: 'Live Site',
            url: 'http://m.bigotires.com/'
          }
        ],
        role: 'Mobile Web Developer',
        images: [
					'/assets/images/projects/moovweb/bigotires/bigotires_0.png',
					'/assets/images/projects/moovweb/bigotires/bigotires_1.png',
					'/assets/images/projects/moovweb/bigotires/bigotires_2.png',
					'/assets/images/projects/moovweb/bigotires/bigotires_3.png',
					'/assets/images/projects/moovweb/bigotires/bigotires_4.png',
					'/assets/images/projects/moovweb/bigotires/bigotires_5.png',
					'/assets/images/projects/moovweb/bigotires/bigotires_6.png',
        ],
        description: 'Working as a Moovweb Mobile Web Developer, I contributed to the transformation of the desktop bigotires site into the mobile adapted version, viewable from the live site link. This project was built on the Moovweb platform and included extensive manipulation of html with javascript and sass. My contribution included the Product Detail Pages (PDP), Search Results Pages, Brand pages, the Store Locator, and several others. Along with these mentioned pages, I designed and built a custom product comparison functionality based on the desktop site\'s equivalent behaviour, optimized for mobile.',
        skills: ['html', 'css', 'sass', 'js', 'git', 'node'],
      },
      {
        featured: false,
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
          '/assets/images/projects/brewjump/brewjump0.png',
          '/assets/images/projects/brewjump/brewjump1.png',
          '/assets/images/projects/brewjump/brewjump2.png',
          '/assets/images/projects/brewjump/brewjump3.png',
          '/assets/images/projects/brewjump/brewjump4.png',
          '/assets/images/projects/brewjump/brewjump5.png',
          '/assets/images/projects/brewjump/brewjump6.png',
          '/assets/images/projects/brewjump/brewjump7.png',
        ],
        description: 'As a Freelance Developer, I developed a shell project & basic UI from the client\'s original design. Additionally, I was tasked with extrapolating a responsive design for mobile and device screens.  This project uses a very minimalistic stack with the intention of being flexible and easily modified for future development.',
        skills: ['html', 'css', 'js', 'git', 'ps'],
      },
			{
        featured: true,
        title: 'Follow The Money',
        client: 'Center for Spatial and Textual Research (CESTA)',
        d: ['Discover', 'Design', 'Develop'],
        links: [
          {
            label: 'Live Demo',
            url: 'http://followthemoney.stanford.edu'
          },
          {
            label: 'Github',
            url: 'https://github.com/cestastanford/follow_the_money'
          }
        ],
        role: 'Developer',
        images: [
					'/assets/images/projects/FTM/FTM_1.png',
					'/assets/images/projects/FTM/FTM_3.png',
					'/assets/images/projects/FTM/FTM_4.png',
					'/assets/images/projects/FTM/FTM_5.png',
					'/assets/images/projects/FTM/FTM_6.png',
        ],
        description: 'As a developer for CESTA, a geospatial history lab at Stanford University, I was the lead programmer on the Follow the Money (FTM) project. This project is a data visualization of the Follow The Money project lead by Joseph E Taylor III exploring a spatial history of in-lieu programs for western federal lands. In creating this project, I used the d3 technology to create an interactive visualization of large datasets.',
        skills: ['html', 'sass', 'css', 'js', 'd3', 'git', 'ai'],
      },
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
		.value('projects', projectsData);

}());
