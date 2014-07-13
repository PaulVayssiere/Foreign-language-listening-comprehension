'use strict';

/**
 * @ngdoc function
 * @name languageTrainerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the languageTrainerApp
 */
angular.module('languageTrainerApp')
  .controller('MainCtrl', function ($scope, $sce, soundgenerator, generators, gamemanager, audio) {

  	$scope.displayAnswerInput = false;
  	$scope.displayAnswerButton = false;
  	$scope.displayGenerateButton = true;
  	$scope.GenerateWithoutValue = '';

  	$scope.digits = parseInt($scope.digits, 10);

  	$scope.clickOnGenerateButton = function() {
	  	if (($scope.digits) && (parseInt($scope.digits, 10).toString().length > 0)) {
	  		$scope.GenerateWithoutValue = '';
	  		$scope.displayAnswerInput = true;
		  	$scope.displayAnswerButton = true;
		  	$scope.displayGenerateButton = false;
				$scope.itemToFind = generators.generateANumber($scope.digits);
				$scope.valueEntered = '';

				$scope.$watch('valueEntered', function(newValue) {
					$scope.manager = gamemanager.generateValues($scope.itemToFind, newValue);
				});

				//$scope.testtext = generators.generateLetters(15);
		    $scope.HTML5AudioPlayer = $sce.trustAsHtml(soundgenerator.generatePlayer($scope.itemToFind)); //with the provider
		    //$scope.songSelect($scope.itemToFind); //With the factory
	  	}
	  	else {
	  		$scope.GenerateWithoutValue = 'has-error';
	  	}
  	};

    $scope.songSelect = function(songPath) {
        audio.play(songPath);
    };

  	$scope.clickOnAnswerButton = function() {
  		$scope.manager = gamemanager.iGiveUp($scope.itemToFind, $scope.valueEntered);
  	};

  });
