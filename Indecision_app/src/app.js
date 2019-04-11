
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
}




const templateThree = (
  <div>
    <h1>{app.title + '!'}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are the options' : 'No options'}</p>
    <p>Age:{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Teo item</li>
    </ol>
  </div>
);














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