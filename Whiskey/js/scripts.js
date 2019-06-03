// $(function() {
//   var userFavWhiskey = prompt("What is your favorite whiskey?");
//   var whiskeyPrice = parseFloat(prompt("How much does it cost?"));
// })

$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("h2").click(function() {
    alert("This is a header2.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });

var sentence = prompt("What is your favorite whiskey?");

  var userFavWhiskey = function(sentence) {
    console.log(sentence);
    letterCase(sentence);
};

  var letterCase = function(sentence) {
    var firstLetter = sentence.charAt(0).toUpperCase();
    var lastLetter = sentence.charAt(sentence.length - 1).toUpperCase();
    var newSentence = firstLetter + lastLetter;
    alert("new letters are " + newSentence);
    reverseLetter(newSentence);
  }

  var reverseLetter = function(letterCase) {
    var tempLetter = letterCase.charAt(1) + letterCase.charAt(0);
    alert("reversed letters are " + tempLetter)
    addLetter(tempLetter);
  }

  var addLetter = function(reverseLetter) {
    alert("added letters are " + sentence + reverseLetter)
  }

userFavWhiskey(sentence);

});
