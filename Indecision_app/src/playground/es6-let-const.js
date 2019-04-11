var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log(' ---------',nameVar);

let nameLet = 'Jim';
nameLet = 'Tom';
console.log(' -------',nameLet);


const nameConst  = 'Tommy';
console.log("--------",nameConst);


function getPetName(){
  const petName ='Blacky';
  return petName;
}

const petName = getPetName();
console.log("-----",petName);


//Block scoping

var fullName = 'Andrew Tom';
let firstName;
if (fullName){
  firstName = fullName.split(' ')[0];
  console.log("--------",firstName);
}
console.log("------",firstName);