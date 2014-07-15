'use strict';

angular.module('languageTrainerApp').factory('gamemanager', function(){

    var glyphicons = {
        'isValid' : {
            'glyphicon': 'glyphicon-ok',
            'formHighlighting': 'has-success'
        },
        'isFalse' : {
            'glyphicon': 'glyphicon-remove',
            'formHighlighting': 'has-error'
        },
        'isOnTheWay' : {
            'glyphicon': 'glyphicon-thumbs-up',
            'formHighlighting': 'has-success'
        }
    };

    function whichGlyphiconToDisplay (itemToFind, valueEntered, glyphicons) {
        if (valueEntered.length === 0) {//if he didn't answer anything, we encourage!
            return glyphicons.isOnTheWay;
        }

        var indexOfValue = itemToFind.indexOf(valueEntered);
        if (indexOfValue !== 0) {//he is wrong
            return glyphicons.isFalse;
        }
        //he is on the way!
        if (itemToFind.length === valueEntered.length) {//he got it!
            return glyphicons.isValid;
        }
        return glyphicons.isOnTheWay;
    }

    return {
        'generateValues': function(itemToFind, valueEntered){
            valueEntered = valueEntered.toLowerCase();
            var res = {
                'toDisplayGenerateButton': (itemToFind === valueEntered),//if they are equal, he won!
                'toDisplayGiveMeTheAnswerButton': (itemToFind !== valueEntered),
                'toDisplayAnswer': false,
                'glyphiconToDisplay': whichGlyphiconToDisplay(itemToFind, valueEntered, glyphicons)
            };
            return res;
        },
        'iGiveUp': function(itemToFind, valueEntered) {//if he gives up
            var res = {
                'toDisplayGenerateButton': true,
                'toDisplayGiveMeTheAnswerButton': false,
                'toDisplayAnswer': true,
                'glyphiconToDisplay': whichGlyphiconToDisplay(itemToFind, valueEntered, glyphicons)
            };
            return res;
        }
    };
});