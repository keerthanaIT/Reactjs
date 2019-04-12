console.log("hi app.js is running");


class Person {
  constructor(name= ' Anonymus',age=0){
  this.name = name;
  this.age=age;
  
  }
  getGretting(){
  return `Hi, I am  ${this.name}!`;
}
getDescript(){
  return`${this.name} is ${this.age} years old.`;
}
}
const me = new Person("tommy", 26);
console.log(me.getDescript());

const other = new Person();
console.log(other.getDescript());
