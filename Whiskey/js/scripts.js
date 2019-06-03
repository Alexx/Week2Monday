$(document).ready(function() {

  const sentence = prompt("What is your favorite whiskey?");

  var userFavWhiskey = function() {
    console.log(sentence);
  };

  var letterCase = function() {
    var firstLetter = sentence.charAt(0).toUpperCase();
    var lastLetter = sentence.charAt(sentence.length - 1).toUpperCase();
    var newSentence = firstLetter + lastLetter;
    return newSentence;
  };

  var reverseLetter = function() {
    var reverse = sentence.charAt(sentence.length-1).toUpperCase() + sentence.charAt(0).toUpperCase();
    return reverse;
  };

  var addLetter = function() {
    var addLetterSentence = sentence + reverseLetter();
    return addLetterSentence;
  };

  var numLetter = function() {
    var index = sentence.charAt(sentence.length/2);
    return index + sentence + reverseLetter();
  };

  userFavWhiskey();
  alert(letterCase());
  alert(reverseLetter());
  alert(addLetter());
  alert(numLetter());

});
