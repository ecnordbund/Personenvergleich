"use strict";
exports.__esModule = true;
var distance = require("js-levenshtein");
var scoreCorrect = 1 / 20;
exports.getScore = function (personA, personB) { return _getScore(personA, personB); };
function _getScore(personA, personB, alsoReverse) {
    if (alsoReverse === void 0) { alsoReverse = true; }
    var score = 1;
    var handleValue = function (valueA, valueB) {
        return valueA === valueB
            ? scoreCorrect
            : Math.max((distance(valueA, valueB) -
                Math.abs(valueA.length - valueB.length)) /
                Math.min(valueA.length, valueB.length), scoreCorrect);
    };
    score /= handleValue(personA.vorname.toLowerCase(), personB.vorname.toLowerCase());
    score /= handleValue(personA.nachname.toLowerCase(), personB.nachname.toLowerCase());
    score /= handleValue(personA.gebDat, personB.gebDat);
    var reverseScore = alsoReverse
        ? _getScore(personA, {
            vorname: personB.nachname,
            nachname: personB.nachname,
            gebDat: personB.gebDat
        }, false)
        : 0;
    return Math.max(reverseScore, score);
}
