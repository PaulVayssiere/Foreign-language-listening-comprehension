'use strict';

angular.module('languageTrainerApp').provider('soundgenerator', function(){

    //in case of we want to change the API to generate a sound file from a text
    this.defaultTextToSpeechUrl = 'http://translate.google.com/translate_tts?ie=UTF-8&tl=en&q=';

    this.$get = function() {
        //to escape the error to be able to write on multiple lines
        /*jshint multistr: true */

        //TODO: Find why it doesn't accept my "this.defaultTextToSpeechUrl" in this "res" variable in my "generatePlayer" function? Forcing me to hardcode it for now?
        //here is our service which will have a method to generate the player to insert
        var soundgenerator = {
            'generatePlayer': function (textToRead) {
                var res = '\
                    <audio controls autoplay>\
                      <source src="https://translate.google.com/translate_tts?ie=UTF-8&tl=en&q='+textToRead+'" type="audio/mpeg">\
                      Your browser does not support the audio element.\
                    </audio>';
                return res;
            }
        };

        return soundgenerator;
    };
});