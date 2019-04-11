
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

const render = () => {
const templateThree = (
  <div>
    <h1>{app.title + '!'}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are the options' : 'No options'}</p>
    <p>{app.options.length}</p>
    <p>Age:{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Teo item</li>
    </ol>
    <form onSubmit = {onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
      <button onClick={onRemoveAll}> Remove All </button>
    </form>
  </div>
);
ReactDOM.render(templateThree, appRoot);

};

render();
















