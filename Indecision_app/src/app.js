
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





const appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
