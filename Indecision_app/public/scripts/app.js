'use strict';

console.log("js file is running");

var add = function add(a, b) {
  // console.log(arguments);
  // arrow function  not bound with arguments
  return a + b;
};

console.log(add(50, 1, 100));

// this keyword no bound with the arrow function


var user = {
  name: 'Tommy',
  cities: ['New Yolk', 'California', 'Los Angles'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has already lived in ' + city;
    });
  }
};

//  the above function will work only when the first is the normal function and second is the arrow function, if it changes the form of function then it will not work..

console.log(user.printPlacesLived());

//Challange area

var multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log('result of Challange task', multiplier.multiply());
