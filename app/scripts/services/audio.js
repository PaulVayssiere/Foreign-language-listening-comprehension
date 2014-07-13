'use strict';

angular.module('languageTrainerApp').factory('audio',function ($document) {
  var audioElement = $document[0].createElement('audio'); //we add to the dom, it is independent to the scope like that
  return {
    audioElement: audioElement,
    audioSrc: null,//See hack for Chrome below

    loadfile: function(language, textToRead) {
        this.audioSrc = 'http://paulvayssiere.com/sound.php?tl='+language+'&q='+textToRead;
        this.play();//and we play it
    },
    play: function() {
        audioElement.src = this.audioSrc;//Small hack because bug in Chrome... See for more info: https://mkswap.net/m/blog/How+to+use+HTML+5+%26lt%3Baudio%26gt%3B+with+JavaScript
        audioElement.play();
    }

  };
});