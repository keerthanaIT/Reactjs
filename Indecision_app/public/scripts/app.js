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
  options: []
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

var count = 0;

var addOne = function addOne() {

  count++;
  renderCounterApp();
  console.log('addOne', count);
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
  console.log('minusOne');
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
  console.log('reset');
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
