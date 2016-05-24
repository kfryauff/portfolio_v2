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
					$scope.noFileTypeMessage = null;
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
					$scope.noFileTypeMessage = 'No File Type Selected. Please select a file format above before attempting to Download';
					// $uibModal.open({
					// 	animation: true,
					// 	templateUrl: 'modalErrorMessage.html',
					// 	controller: 'modalErrorMessageCtrl',
					// 	resolve: {
					// 		message: function() {
					// 			return 'Please select a file type to download.';
					// 		}
					// 	}
					// });
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
		.controller('contactMeModalCtrl', function($scope, $http, $log, promiseTracker, $uibModalInstance) {
			// Inititate the promise tracker to track form submissions.
			$scope.progress = promiseTracker();

			$scope.cancel = function () {
				$uibModalInstance.dismiss('cancel');
			};
			$scope.submit = function (form) {
				// $uibModalInstance.close('sent');
				console.log('uibmodalinst: ', $uibModalInstance);

				// Trigger validation flag.
  			$scope.submitted = true;

				// If form is invalid, return and let AngularJS show validation errors.
			  if (form.$invalid) {
			    return;
			  }

				// Default values for the request.
			  var config = {
			    params : {
			      'callback' : 'JSON_CALLBACK',
			      'name' : $scope.name,
			      'email' : $scope.email,
			      'subject' : $scope.subject,
			      'message' : $scope.message
			    },
			  };

			  // Perform JSONP request.
			  var $promise = $http.jsonp('response.json', config)
			    .success(function(data, status, headers, config) {
			      if (data.status === 'OK') {
			        $scope.name = null;
			        $scope.email = null;
			        $scope.subject = null;
			        $scope.message = null;
			        $scope.successmessages = 'Your form has been sent!';
			        $scope.submitted = false;
			      } else {
			        $scope.errmessages = 'Oops, we received your request, but there was an error processing it.';
			        $log.error(data);
			      }
			    })
			    .error(function(data, status, headers, config) {
			      $scope.progress = data;
			      $scope.errmessages = 'There was a network error. Try again later.';
			      $log.error(data);
			    })
			    .finally(function() {
			      // Hide status errmessages after three seconds.
			      $timeout(function() {
			        $scope.errmessages = null;
							$scope.successmessages = null;
			      }, 3000);
			    });

			  // Track the request and show its progress to the user.
			  $scope.progress.addPromise($promise);
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
