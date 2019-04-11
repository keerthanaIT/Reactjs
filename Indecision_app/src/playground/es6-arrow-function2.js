console.log("js file is running");

const add = (a,b) =>{
  // console.log(arguments);
  // arrow function  not bound with arguments
  return a+b ;

};

console.log(add(50, 1,100));


// this keyword no bound with the arrow function


const user = {
  name:'Tommy',
  cities:['New Yolk','California','Los Angles'],
  printPlacesLived(){
   return this.cities.map((city) => {
      return this.name + ' has already lived in ' + city;


    });
    
  }
};
    
//  the above function will work only when the first is the normal function and second is the arrow function, if it changes the form of function then it will not work..

console.log(user.printPlacesLived());


//Challange area

const multiplier = {
  numbers :[10,20,30],
  multiplyBy : 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }


};

console.log('result of Challange task',multiplier.multiply());

