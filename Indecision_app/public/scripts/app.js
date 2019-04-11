'use strict';

console.log("App.js is running");

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    ' this is example'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      ' First'
    ),
    React.createElement(
      'li',
      null,
      ' Second'
    ),
    React.createElement(
      'li',
      null,
      ' Third '
    )
  )
);

var user = {
  name: 'Mike',
  Age: 10,
  Location: 'New Yolk'
};

var app = {
  title: 'Indecision App',
  subtitle: 'This is an example'
};
var templateThree = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title + '!'
  ),
  React.createElement(
    'p',
    null,
    'Age:',
    app.subtitle
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name + '!!'
  ),
  React.createElement(
    'h1',
    null,
    user.name.toUpperCase()
  ),
  React.createElement(
    'p',
    null,
    'Age:',
    user.Age
  ),
  React.createElement(
    'p',
    null,
    'Location:',
    user.Location
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
