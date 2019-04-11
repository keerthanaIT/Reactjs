'use strict';

console.log("js file is running");

var square = function square(x) {
  return x * x;
};
console.log(square(8));

var arrowFunction = function arrowFunction(y) {
  return y * y;
};

console.log(arrowFunction(10));

var arrowFunction1 = function arrowFunction1(z) {
  return z * z;
};
console.log(arrowFunction1(4));

// Challange 1

var name = 'Mike Smith';
if (name) {
  var firstName = name.split(' ')[0];
}
console.log("FirstName--------", firstName);

//Challange 2

var arrow = function arrow(y) {
  return y + y;
};

console.log("arrow function output", arrow(10));

//Challange 3

var arrow1 = function arrow1(z) {
  var value = z * z;
  console.log("value inside the arrow function", value);
};
console.log("value outside the arrow function", arrow1(20));

//Challange done

var getFirstName = function getFirstName(Name) {
  return Name.split(' ')[0];
};

console.log(getFirstName('Jon Tom'));
