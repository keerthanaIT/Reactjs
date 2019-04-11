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

var app = {
  title: 'Indecision App',
  subtitle: 'This is an example',
  options: ['One', 'Two']
};

var templateThree = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title + '!'
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are the options' : 'No options'
  ),
  React.createElement(
    'p',
    null,
    'Age:',
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Teo item'
    )
  )
);

var user = {
  name: 'Mike',
  Age: 26,
  Location: 'New Yolk'

};

function getLocation(Location) {
  if (Location) {
    return React.createElement(
      'p',
      null,
      'Location:',
      Location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonomys'
  ),
  user.Age && user.Age >= 18 && React.createElement(
    'p',
    null,
    'Age:',
    user.Age
  ),
  getLocation(user.Location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
