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
		$scope.displaySoundFileLoader = false;
  	$scope.digits = parseInt($scope.digits, 10);

  	$scope.clickOnGenerateButton = function() {
	  	if (($scope.digits) && (parseInt($scope.digits, 10).toString().length > 0)) {
	  		$scope.GenerateWithoutValue = '';
	  		$scope.displayAnswerInput = true;
		  	$scope.displayGenerateButton = false;
		  	$scope.displaySoundFileLoader = true;
				$scope.itemToFind = generators.generateANumber($scope.digits);
				$scope.valueEntered = '';

				$scope.$watch('valueEntered', function(newValue) {
					$scope.manager = gamemanager.generateValues($scope.itemToFind, newValue);
				});

				//$scope.testtext = generators.generateLetters(15);
		    //$scope.HTML5AudioPlayer = $sce.trustAsHtml(soundgenerator.generatePlayer($scope.itemToFind)); //with the provider
		    $scope.soundSelect($scope.itemToFind, $scope); //With the factory
	  	}
	  	else {
	  		$scope.GenerateWithoutValue = 'has-error';
	  	}
  	};

  	$scope.playbutton = function() {
  		$scope.displaySoundFileLoader = true;
  		$scope.displayAnswerButton = false;
  		audio.play();
  	};

    $scope.soundSelect = function(textToRead) {
  		$scope.displaySoundFileLoader = true;
      audio.loadfile(textToRead);
    };

  	$scope.clickOnAnswerButton = function() {
  		$scope.manager = gamemanager.iGiveUp($scope.itemToFind, $scope.valueEntered);
  	};

  	//this shouldn't be here
    audio.audioElement.oncanplaythrough = function () {
			$scope.$apply(function () {
				$scope.displaySoundFileLoader = false;
				$scope.displayAnswerButton = true;
			});
		};

  });
