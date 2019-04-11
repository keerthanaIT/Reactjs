console.log("js file is running");

const square = function (x){
  return x * x ;
};
console.log(square(8));



const arrowFunction = (y) => {
  return y *y ; 
}

console.log(arrowFunction(10));

const arrowFunction1 = (z) => z *z;
console.log(arrowFunction1(4));

// Challange 1

let name = 'Mike Smith';
if (name) {
  var firstName = name.split(' ')[0];
}
console.log("FirstName--------", firstName);

//Challange 2

const arrow = (y) => y+y;

console.log("arrow function output",arrow(10));

//Challange 3

const arrow1 = (z) => {
  var value = z *z;
  console.log("value inside the arrow function",value);
}
console.log("value outside the arrow function",arrow1(20));



//Challange done

const getFirstName = (Name) => Name.split(' ')[0];

console.log(getFirstName('Jon Tom'));