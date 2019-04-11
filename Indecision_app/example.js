
// Exercise for add, mnus, reset when onclick of the button



let count = 0;


const addOne = () => {

 count++;
  renderCounterApp();
console.log('addOne',count);
};


const minusOne = () => {
  count--;
  renderCounterApp();
console.log('minusOne');
};

const reset = () => {
  count=0;
  renderCounterApp();
console.log('reset');
};


const appRoot = document.getElementById('app'); 

const renderCounterApp =() => {
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);



ReactDOM.render(templateTwo, appRoot);
};
 renderCounterApp(); 






















// -------------------------------------------------
<!-- If satatement -->

var user = {
  name: 'Mike',
  Age :10,
  Location:'New Yolk'
}
function getLocation(Location){
  if(Location){
    return <p>Location:{Location}</p>;
  }
}
var templateTwo = (
  <div>
    <h1>{user.name + '!!'}</h1>
    <h1>{user.name.toUpperCase()}</h1>
    <p>Age:{user.Age}</p>
    {getLocation(user.Location)}
  </div>
);


<!-- && condition -->

var user = {
  name: 'Mike',
  Age :26,
  Location:'New Yolk'
 
};



function getLocation(Location){
  if(Location){
    return <p>Location:{Location}</p>;
  }
}


var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonomys'}</h1>
    {(user.Age && user.Age >= 18) && <p>Age:{user.Age}</p>}
    {getLocation(user.Location)}
  </div>
);



// user concept in src, app.js file

const user = {
  name: 'Mike',
  Age :26,
  Location:'New Yolk'
 
};



function getLocation(Location){
  if(Location){
    return <p>Location:{Location}</p>;
  }
}


const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonomys'}</h1>
    {(user.Age && user.Age >= 18) && <p>Age:{user.Age}</p>}
    {getLocation(user.Location)}
  </div>
);
