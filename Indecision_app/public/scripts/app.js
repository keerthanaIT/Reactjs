
console.log("App.js is running");

var template = React.createElement("h1", {
  id: "someid"
}, " This is an example for react js ");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
