/* function greeting (name){
  prompt("What is your name?");
  return name;
}

function saySomething (something) {
  return alert(something);
}

var name = greeting();

saySomething(name); */

/* var saySomething = function(whatToSay) {
  var person = prompt("What is your name?: ")
  alert("good morning " + person + " " + whatToSay);
  alert(whatToSay);
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

saySomething("The subtract is " + subtract(10,5) + "."); */

/* var multiply = function(num1, num2) {
  return alert(num1 * num2);
}

var threeTimes = function(num1, num2, num3) {
  return num1 * num2 * num3;
}

multiply(3, 5);

alert(threeTimes(2,8,9)); */

/* var remainder = function (num1, num2) {
  return alert(num1 % num2);
}

remainder(10, 3) */

/* var age = prompt("What is your age: ")
var name = prompt("What is your name : ")
var food = prompt("What is your favorite food? : ")

var personalInfo = function (age, name, food) {
  return alert("Hello " + name + ". You're " + age + " years old. Your favorite food is " + food);
}

personalInfo(age, name, food); */

var add = function(num1, num2) {
	return num1 + num2;
};

var subtract = function(num1, num2) {
  return num1 - num2;
};

var multiply = function(num1, num2) {
  return num1 * num2;
};

var divide = function(num1, num2) {
  return num1 / num2;
};

var num1 = parseInt(prompt("Enter a number: "));
var num2 = parseInt(prompt("Enter another number: "));


alert(divide(num1, num2));
