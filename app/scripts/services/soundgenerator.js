'use strict';

angular.module('languageTrainerApp').provider('soundgenerator', function(){

    //in case of we want to change the API to generate a sound file from a text
    //TODO: Find why it doesn't accept my "this.defaultTextToSpeechUrl" in this "res" variable in my "generatePlayer" function? Forcing me to hardcode it for now?
    //here is our service which will have a method to generate the player to insert
    this.defaultTextToSpeechUrl = 'http://translate.google.com/translate_tts?ie=UTF-8&tl=en&q=';
    //Note, in fact the TTS Google API doesn't work with crossdomain, but work if I cURL it...

    this.$get = function() {
        //to escape the error to be able to write on multiple lines
        /*jshint multistr: true */

        var soundgenerator = {
            'generatePlayer': function (textToRead) {
                var res = '\
                    <audio controls autoplay>\
                      <source src="http://paulvayssiere.com/sound.php?tl=en&q='+textToRead+'" type="audio/mpeg">\
                      Your browser does not support the audio element.\
                    </audio>';
                return res;
            }
        };

        return soundgenerator;
    };
});




angular.module('languageTrainerApp').factory('audio',function ($document) {
  var audioElement = $document[0].createElement('audio'); //we add to the dom, it is independent to the scope like that
  return {
    audioElement: audioElement,
    audioSrc: null,//See hack for Chrome below

    loadfile: function(textToRead) {
        this.audioSrc = 'http://paulvayssiere.com/sound.php?tl=en&q='+textToRead;
        this.play();//and we play it
    },
    play: function() {
        audioElement.src = this.audioSrc;//Small hack because bug in Chrome... See for more info: https://mkswap.net/m/blog/How+to+use+HTML+5+%26lt%3Baudio%26gt%3B+with+JavaScript
        audioElement.play();
    }

  };
});