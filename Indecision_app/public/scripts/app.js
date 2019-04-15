'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var obj = {
  name: 'examplename',
  getName: function getName() {
    return this.name;
  }
};

var getName = obj.getName.bind({ name: 'Tommy' });
console.log(getName());

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(probs) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, probs));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.state = {
      options: ["four", "five", "six"]
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      console.log(option);
    }
  }, {
    key: 'render',
    value: function render() {
      var title = "Indecision";
      var subtitle = "This is a subtitle for using probs concept";
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0 }),
        React.createElement(Option, { options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Index'
        ),
        React.createElement(
          'h2',
          null,
          'Sub Index'
        ),
        React.createElement(
          'p',
          null,
          'This is From  header'
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'onClickAlert',
    value: function onClickAlert() {
      alert('example for event handler');
    }
  }, {
    key: 'render',
    value: function render() {
      var _React$createElement;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          (_React$createElement = { onClick: this.onClickAlert
          }, _defineProperty(_React$createElement, 'onClick', this.onClickAlert), _defineProperty(_React$createElement, 'disabled', !this.prob.hasOptions), _React$createElement),
          'this is button'
        ),
        React.createElement(
          'p',
          null,
          'This is from Actions'
        ),
        ';'
      );
    }
  }]);

  return Action;
}(React.Component);

var Option = function (_React$Component4) {
  _inherits(Option, _React$Component4);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',


    // constructor(probs){
    //   super(probs);
    //   this.onClickRemove = this.onClickRemove.bind;
    // }
    // onClickRemove(){
    //   alert('Remove all event');
    // }
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.onClickRemove.bind(this) },
          'Remove All'
        ),
        '// Example task for using react component // ',
        this.probs.options.length
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component5) {
  _inherits(AddOption, _React$Component5);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      if (option) {
        alert(option);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            ' Add Option '
          )
        ),
        '// ',
        this.probs.optionText,
        '// Example task for additional options in reactjs',
        React.createElement(Option1, null)
      );
    }
  }]);

  return AddOption;
}(React.Component);

// Exampletask

var Option1 = function (_React$Component6) {
  _inherits(Option1, _React$Component6);

  function Option1() {
    _classCallCheck(this, Option1);

    return _possibleConstructorReturn(this, (Option1.__proto__ || Object.getPrototypeOf(Option1)).apply(this, arguments));
  }

  _createClass(Option1, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Option One React Component here'
      );
    }
  }]);

  return Option1;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
