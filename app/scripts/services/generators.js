'use strict';

//this module just have 2 methods to generate a number or some letters.
angular.module('languageTrainerApp').factory('generators', function(){

    //get a number
    function randomCharacter() {
        var chars = 'abcdefghijklmnopqurstuvwxyz';
        return chars.substr( Math.floor(Math.random() * (chars.length)), 1);
    }

    return {
        'generateANumber': function(numberOfDigits){
            var res = '';

            //TODO HERE: Use the range from the selectbox
            if (numberOfDigits === 'random') {
                var max = 7;//horrible, I have ot change that
                var min = 2;
                numberOfDigits = Math.floor(Math.random() * (max - min + 1)) + min;
            }

            for (var i = 0; i < numberOfDigits; i++)
            {
                res += Math.floor((Math.random() * 10)).toString();
            }
            return res;
        },
        'generateLetters': function(numberOfLetters){
            var res = '';
            for (var i = 0; i < numberOfLetters; i++)
            {
                res += randomCharacter();
            }
            return res;
        }
    };
});