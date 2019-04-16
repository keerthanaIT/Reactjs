// // import subract,{square , add} from './utilis.js'
// import isSenior ,{ isAdult , canDrink} from './person.js'


// console.log("data app.js --------");
// // console.log(square(4));
// // console.log(add(10,10));
// // console.log(subract(20,10));
// console.log(isAdult(18));
// console.log(canDrink(21));
// console.log(isSenior(64));

// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'testing 123');
ReactDOM.render(template, document.getElementById('app'));