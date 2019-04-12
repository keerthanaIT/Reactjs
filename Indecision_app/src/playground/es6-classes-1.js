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



class Student extends Person {

}



const student = new Student('Andrew Mead',26, 'Computer Science');
console.log(student);

const otherstudent = new Student();
console.log(otherstudent);









const me = new Person("tommy", 26);
console.log(me.getDescript());

const other = new Person();
console.log(other.getDescript());
