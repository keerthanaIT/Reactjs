const obj = {
  name:'examplename',
  getName(){
    return this.name;
  }
};

const getName = obj.getName.bind({name:'Tommy'});
console.log(getName());








class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: ["four","five", "six"]
    }
  }
  handleDeleteOptions(){
    this.setState(() => {
      return {
        options:[]
      }

    })

  }
  handleAddOption(option){
    this.setState
  }
  render(){
    const title = "Indecision";
    const subtitle = "This is a subtitle for using props concept";
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions = {this.state.options.length > 0}/>
        <Option options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
         />
      </div>
      );
  }
}






const Header = (props) => {
    return (
    <div>
      <h1>{props.title}</h1>
      <h2>Sub Index</h2>
      <p>This is From  header</p>   
    </div>
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


class Action extends React.Component {
  onClickAlert(){
    alert('example for event handler');
  }
  render(){
    return(
    <div>
      <button onClick={this.onClickAlert}
      onClick = {this.onClickAlert}
      disabled={!this.prop.hasOptions}



      >this is button</button>
       <p>This is from Actions</p>;
    </div>
    );
    
  }
}



class Option extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.onClickRemove = this.onClickRemove.bind;
  // }
  // onClickRemove(){
  //   alert('Remove all event');
  // }
  render(){
    return (
    <div>
    <button onClick={this.onClickRemove.bind(this)}>Remove All</button>
    {
      // this.props.options.map[(options) => <p key={options}>{options}</p>]
     // this.props.options.map((option) => <Option key={option} optionText={option})
    }



      // Example task for using react component
      // {this.props.options.length}
    </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option){
      this.props.handleAddOption(option);
    }
  }
  render() {
    return (
    <div>
      <form onSubmit={this.handleAddOption}>
      <input type="text" name="option" />
      <button> Add Option </button>
      </form>




      // {this.props.optionText}
      // Example task for additional options in reactjs
     <Option1 />
    </div>
    );
  }
}

// Exampletask

class Option1 extends React.Component {
  render(){
    return (
    <div>
      Option One React Component here
    </div>

    );
  }
}






// stateless function

const User = (props) =>{
  return(
  <div>
    <p> Name:{props.name} </p>
    <p> Age: {props.age}</p>
  </div>

  )
}
User.defaultProps = {
  name:'default name '
}








ReactDOM.render(<User age={20}/>, document.getElementById('app'));













