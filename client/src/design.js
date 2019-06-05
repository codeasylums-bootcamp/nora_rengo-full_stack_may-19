var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {
		$scope.currentStep = 1;
		
		$scope.setStep = function(step) {
      if (step == 1) { // If first step hide previous button
        $scope.previousStep = 0;
      } else {
         $scope.previousStep = $scope.currentStep;
      }
      $scope.currentStep = step;
    }
    
	});