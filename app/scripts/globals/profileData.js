/*jslint browser: true*/
/*global angular*/

(function () {

	'use strict';

  var profileData = {
    name: 'K. Fryauff',
    tag: 'Developer | Designer',
    email: 'email@address.com',
    phone: '000-000-0000',
    address: '123 Address, City, State',
    location: 'Bay Area, CA, USA',
    image: 'http://lorempixel.com/100/100/animals/8/',
    socialMedia: {
      email: {
        link: 'javscript:void(0);',
        click: 'contactMe()',
        image: 'assets/images/socialmedia/Email.png'
      },
      linkedin: {
        link: 'https://www.linkedin.com/in/kfryauff',
        image: 'assets/images/socialmedia/Linkedin.png',
        target: '_blank'
      },
      gplus: {
        link: 'https://mail.google.com/mail/?view=cm&fs=1&to=krista.fryauff@gmail.com',
        image: 'assets/images/socialmedia/Gmail.png',
        target: '_blank'
      }
    }
  };
	var resumeLoc = 'assets/KFryauff_Resume_2016_v1';

	angular.module('portfolioApp')
		.value('profile', profileData)
		.value('resumeLoc', resumeLoc);

}());
