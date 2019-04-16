'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const obj = {
//   name:'examplename',
//   getName(){
//     return this.name;
//   }
// };

// const getName = obj.getName.bind({name:'Tommy'});
// console.log(getName());


var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);

    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('fetching data');
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      console.log('componentDidUpdate');
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('componentWillUnmount');
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.stater.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }

    //   componentDidMount(){
    //     console.log('fetching data');

    //   }

    // componentDidUpdate(prevProps, prevState){
    //   console.log('componentDidUpdate');
    // }

    // componentWillUnmount()
    // {
    //   console.log('componentWillUnmount');
    // }


    //   handleDeleteOptions(){
    //     this.setState(() => ({
    // options:[]

    // }));

    //   }

  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (option) {
        return 'enter vaild value';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'this options already exist';
      }
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // const title = "Indecision";
      var subtitle = "This is a subtitle for using props concept";
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        '}',
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    probs.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle,
      ' '
    ),
    React.createElement(
      'p',
      null,
      'This is From  header'
    )
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

// class Header extends React.Component {
//   render(){
//     return (
//     <div>
//       <h1>Index</h1>
//       <h2>Sub Index</h2>
//       <p>This is From  header</p>   
//     </div>
//     );

//   }
// }


var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handlePick,
        disabled: !prop.hasOptions

      },
      'this is button'
    ),
    React.createElement(
      'p',
      null,
      'This is from Actions'
    ),
    ';'
  );
};

// class Action extends React.Component {
//   onClickAlert(){
//     alert('example for event handler');
//   }
//   render(){
//     return(

//     );

//   }
// }


var Option = function (_React$Component2) {
  _inherits(Option, _React$Component2);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',


    // constructor(props){
    //   super(props);
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
        this.props.options.length
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component3) {
  _inherits(AddOption, _React$Component3);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this3.handleAddOption = _this3.handleAddOption.bind(_this3);
    return _this3;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      if (option) {
        this.props.handleAddOption(option);
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
        this.props.optionText,
        '// Example task for additional options in reactjs',
        React.createElement(Option1, null)
      );
    }
  }]);

  return AddOption;
}(React.Component);

// Exampletask

var Option1 = function (_React$Component4) {
  _inherits(Option1, _React$Component4);

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

// stateless function

var User = function User(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      ' Name:',
      props.name,
      ' '
    ),
    React.createElement(
      'p',
      null,
      ' Age: ',
      props.age
    )
  );
};
User.defaultProps = {
  name: 'default name '

  // ReactDOM.render(<User age={20}/>, document.getElementById('app'));
};ReactDOM.render(React.createElement(IndecisionApp, { options: ['options one', 'options two'] }), document.getElementById('app'));
