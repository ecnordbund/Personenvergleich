"use strict";
exports.__esModule = true;
var distance = require("js-levenshtein");
var scoreCorrect = 1 / 20;
function getScore(personA, personB, alsoReverse) {
    if (alsoReverse === void 0) { alsoReverse = true; }
    var score = 1;
    // Vergleich Vornamen
    var vornameA = personA.vorname.toLowerCase();
    var vornameB = personB.vorname.toLowerCase();
    if (vornameA === vornameB) {
        score /= scoreCorrect;
    }
    else {
        score /= Math.max((distance(vornameA, vornameB) -
            Math.abs(vornameA.length - vornameB.length)) /
            Math.min(vornameA.length, vornameB.length), scoreCorrect);
    }
    var nachnameA = personA.nachname.toLowerCase();
    var nachnameB = personB.nachname.toLowerCase();
    if (nachnameA === nachnameB) {
        score /= scoreCorrect;
    }
    else {
        score /= Math.max((distance(nachnameA, nachnameB) -
            Math.abs(nachnameA.length - nachnameB.length)) /
            Math.min(nachnameA.length, nachnameB.length), scoreCorrect);
    }
    if (personA.gebDat === personB.gebDat) {
        score /= scoreCorrect;
    }
    else {
        score /= Math.max((distance(personA.gebDat, personB.gebDat) -
            Math.abs(personA.gebDat.length - personB.gebDat.length)) /
            Math.min(personA.gebDat.length, personB.gebDat.length), scoreCorrect);
    }
    if (alsoReverse) {
        return Math.max(score, getScore(personA, {
            vorname: personB.nachname,
            nachname: personB.nachname,
            gebDat: personB.gebDat
        }, false));
    }
    else {
        return score;
    }
}
exports.getScore = getScore;
