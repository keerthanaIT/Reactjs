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

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
  console.log(app.options);
  console.log('form submitted!');
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
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
      app.options.length
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
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      ),
      React.createElement(
        'button',
        { onClick: onRemoveAll },
        ' Remove All '
      )
    )
  );
  ReactDOM.render(templateThree, appRoot);
};

render();
