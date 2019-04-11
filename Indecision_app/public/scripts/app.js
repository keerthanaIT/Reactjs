"use strict";

console.log("App.js is running");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    " this is example"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      " First"
    ),
    React.createElement(
      "li",
      null,
      " Second"
    ),
    React.createElement(
      "li",
      null,
      " Third "
    )
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Name"
  ),
  React.createElement(
    "p",
    null,
    "Age"
  ),
  React.createElement(
    "p",
    null,
    "Location"
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
