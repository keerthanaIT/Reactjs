'use strict';

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log(' ---------', nameVar);

var nameLet = 'Jim';
nameLet = 'Tom';
console.log(' -------', nameLet);

var nameConst = 'Tommy';
console.log("--------", nameConst);

function getPetName() {
  var petName = 'Blacky';
  return petName;
}

var petName = getPetName();
console.log("-----", petName);

//Block scoping

var fullName = 'Andrew Tom';
var firstName = void 0;
if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log("--------", firstName);
}
console.log("------", firstName);
