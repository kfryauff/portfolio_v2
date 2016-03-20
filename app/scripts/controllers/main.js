/*jslint browser: true*/
/*global angular*/

(function () {

	'use strict';

	/**
	 * @ngdoc function
	 * @name portfolioApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the portfolioApp
	 */
	angular.module('portfolioApp')
	  .controller('MainCtrl', ['$scope', '$uibModal', 'profile', function ($scope, $uibModal, profile) {
	    this.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
			$scope.profile = profile;
			$scope.updatedDate = '10/02/2015';

			$scope.downloadResume = function (fileType) {
				$scope.fileType = fileType;
				if(fileType) {
					var resumeDownloadModalInstance = $uibModal.open({
			      animation: true,
			      templateUrl: 'resumeModal.html',
			      controller: 'resumeDownloadModalCtrl',
			      resolve: {
							selectedFileType: function() {
								return $scope.fileType;
							}
			      }
			    });

					resumeDownloadModalInstance.result.then(function (selectedItem) {
			      $scope.selected = selectedItem;
						console.log(selectedItem);
			    }, function () {
			      console.log('Modal dismissed at: ' + new Date());
			    });
				} else {
					$uibModal.open({
						animation: true,
						templateUrl: 'modalErrorMessage.html',
						controller: 'modalErrorMessageCtrl',
						resolve: {
							message: function() {
								return 'Please select a file type to download.';
							}
						}
					});
				}

		  };

		  $scope.contactMe = function() {
				var contactMeModalInstance = $uibModal.open({
					animation: true,
					templateUrl: 'contactMe.html',
					controller: 'contactMeModalCtrl',
					resolve: {

					}
				});

				contactMeModalInstance.result.then(function () {
					console.log('Message Sent');
				}, function () {
					console.log('Modal dismissed at: ' + new Date());
				});
			};
	  }])
		.controller('modalErrorMessageCtrl', function($scope, $uibModalInstance, message) {
			$scope.errormessage = message || 'There seems to be an error, please try the action again. Sorry for the trouble!';
			$scope.ok = function () {
				$uibModalInstance.close('ok');
			};
		})
		.controller('contactMeModalCtrl', function($scope, $uibModalInstance) {
			$scope.cancel = function () {
				$uibModalInstance.dismiss('cancel');
			};
			$scope.send = function () {
				$uibModalInstance.close('sent');
			};
		})
		.controller('resumeDownloadModalCtrl', function ($scope, $uibModalInstance, selectedFileType) {

			$scope.fileType = selectedFileType ? ('Downloading : KFryauff_Resume' + selectedFileType) : '';

			  $scope.download = function () {
			    $uibModalInstance.close('close');
			  };

			  $scope.cancel = function () {
			    $uibModalInstance.dismiss('cancel');
			  };
			});


}());
