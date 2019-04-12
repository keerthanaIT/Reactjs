console.log("hi app.js is running");


class Person {
  constructor(name= ' Anonymus'){
  this.name = name;
  
  }
  getGretting(){
  return 'Hi, I am' + this.name + '!';
}

}
const me = new Person("tommy");
console.log(me.getGretting());

const other = new.Person();
console.log(other.getGretting());
