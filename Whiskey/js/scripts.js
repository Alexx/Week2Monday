$(document).ready(function() {

  var sentence = prompt("What is your favorite whiskey?");

  var userFavWhiskey = function(sentence) {
    console.log(sentence);
    alert(letterCase(sentence));
    alert(reverseLetter(sentence));
    alert(addLetter(sentence));
    alert(numLetter(sentence));
  };

  var letterCase = function(sentence) {
    var firstLetter = sentence.charAt(0).toUpperCase();
    var lastLetter = sentence.charAt(sentence.length - 1).toUpperCase();
    var newSentence = firstLetter + lastLetter;
    return newSentence;
  };

  var reverseLetter = function(sentence) {
    var reverse = sentence.charAt(sentence.length-1).toUpperCase() + sentence.charAt(0).toUpperCase();
    return reverse;
  };

  var addLetter = function(sentence) {
    var addLetterSentence = sentence + reverseLetter(sentence);
    return addLetterSentence;
  };

  var numLetter = function(sentence) {
    var index = sentence.charAt(sentence.length/2);
    return index + sentence + reverseLetter(sentence);
  };

  userFavWhiskey(sentence);

});
