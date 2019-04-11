
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


var templateTwo = (
  <div>
    <h1>Name</h1>
    <p>Age</p>
    <p>Location</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
