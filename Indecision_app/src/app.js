
console.log("App.js is running");

var template = (
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


var user = {
  name: 'Mike',
  Age :10,
  Location:'New Yolk'
}

var app = {
  title :'Indecision App',
  subtitle: 'This is an example'
}
var templateThree = (
  <div>
    <h1>{app.title + '!'}</h1>
    <p>Age:{app.subtitle}</p>
  </div>
);




var templateTwo = (
  <div>
    <h1>{user.name + '!!'}</h1>
    <h1>{user.name.toUpperCase()}</h1>
    <p>Age:{user.Age}</p>
    <p>Location:{user.Location}</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
