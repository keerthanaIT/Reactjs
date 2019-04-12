
// Exercise for add, mnus, reset when onclick of the button

// ----------------------------------------



// examples from playground app.js file 


console.log("App.js is running");

const template = (
  <div>
    <h1>Indecision App</h1>
    <p> this is example</p>
    <ol>
      <li> First</li>
      <li> Second</li>
      <li> Third </li>
    </ol>
  </div>
);


const app = {
  title :'Indecision App',
  subtitle: 'This is an example',
  options:[]
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
console.log(app.options);
  console.log('form submitted!');

};


const onRemoveAll = () => {
  app.options = [];
  render();
};





const appRoot =document.getElementById('app');

const numbers = [55,101,100];

const render = () => {
const templateThree = (
  <div>
    <h1>{app.title + '!'}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are the options' : 'No options'}</p>
    <p>{app.options.length}</p>
    <p>Age:{app.subtitle}</p>
    <ol>
    {
      app.options.map((option) => {
        return <li key={option}>{option}</li>
      })
    }
      
      
    </ol>
    <form onSubmit = {onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
       <button onClick={onRemoveAll}> Remove All </button>
      {
        // numbers.map((number) => {
        //   return <p key={number}>Number: {number}</p>
        // })
      }   

    </form>
  </div>
);
ReactDOM.render(templateThree, appRoot);

};

render();





// ----------------------------------------------

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
