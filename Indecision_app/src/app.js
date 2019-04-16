// const obj = {
//   name:'examplename',
//   getName(){
//     return this.name;
//   }
// };

// const getName = obj.getName.bind({name:'Tommy'});
// console.log(getName());








class IndecisionApp extends React.Component {
  constructor(props){ //constructor initial the value
    super(props); // super keyword is used to refer the parent date and props have the options in reactDom
    this.handleDeleteOptions=this.handleDeleteOptions.bind(this); 
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick =this.handlePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);


    this.state = {
      options: props.options
    };
  }

componentDidMount(){
  console.log("componentDidMount")
  try {
     const json = localStorage.getItem('options');
     const options = JSON.parse(json); 

    if(options){
      this.setState(() => ({options}));

    }

  } catch (e) {

  }
  }





  //   console.log('fetching data');
  //   const json = localStorage.getItem('options');
  //   const options = JSON.parse(json); 

  //   if(options){
  //     this.setState(() => ({options}));

  //   }


  // }

componentDidUpdate(prevProps, prevState){
  if(prevState.options.length !== this.state.options.length){
  console.log('componentDidUpdate');
  const json = JSON.stringify(this.state.options);
  localStorage.setItem('options',json);
}
}

componentWillUnmount()
{
  console.log('componentWillUnmount');
}












handleDeleteOptions(){
  this.setState(() => ({options: [] }));
}
handleDeleteOption(optionToRemove){
  this.setState((prevState) => ({
    options:prevState.options.filter((option) => optionToRemove !== option)
  }));
}
handlePick() {
  const randomNum = Math.floor(Math.random() * this.state.options.length);
  const option = this.state.options[randomNum];
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

  handleAddOption(option){
    if(! option){
      return 'enter vaild value';
    }else if (this.state.options.indexOf(option)> -1){
      return 'this options already exist';
    }
    this.setState((prevState) => ({
      options:prevState.options.concat(option)
    }));
  }
  render(){
    // const title = "Indecision";
    const subtitle = "This is a subtitle for using props concept";
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
         hasOptions = {this.state.options.length > 0}
        handlePick={this.handlePick}
         />
        }
        <Options 
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
         />
      </div>
      ); 
  }
}

IndecisionApp.defaultProps = {
  options:[]
};



//header

const Header = (props) => {
    return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle} </h2>} 
      <p>This is From  header</p>   
    </div>
    );
};
Header.defaultProps = {
  title: 'Indecision'
};







// Action

const Action = (props) => {
  return (
  <div>
      <button 
      onClick={props.handlePick}
      disabled={!props.hasOptions}
      >this is button</button>
       <p>This is from Actions</p>;
    </div>

  )
}




const Options = (props) => { 
  return (
   <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p> Please add an options to get started</p>}
    {
      props.options.map((option) => (
        <Option
        key={option}
        optionText={option}
        handleDeleteOption ={props.handleDeleteOption}
        />
      ))
    }
    </div>
  );
};

const Option = (props) => {
  return (
  <div>
    {props.optionText}
  <button
  onClick={(e) => {
    props.handleDeleteOption(props.optionText);
  }}
  >
  Remove
  </button>
  </div>


  );
};









class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error:undefined
    };
  }

  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error =this.props.handleAddOption(option);
    this.setState(() => ({error}));
    if(!error){
      e.target.elements.option.value = '';
    }






  }
  
  render() {
    return (
    <div>
    {this.state.error && <p> {this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
      <input type="text" name="option" />
      <button> Add Option </button>
      </form>
     
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









ReactDOM.render(<IndecisionApp options={['options one','options two']}/>, document.getElementById('app'));






// ReactDOM.render(<User age={20}/>, document.getElementById('app'));
//   if(option){
  //     this.props.handleAddOption(option);
  //   }
  // }

// class Action extends React.Component {
//   onClickAlert(){
//     alert('example for event handler');
//   }
//   render(){
//     return(
    
//     );
    
//   }
// }



// class Option extends React.Component {

//   // constructor(props){
//   //   super(props);
//   //   this.onClickRemove = this.onClickRemove.bind;
//   // }
//   // onClickRemove(){
//   //   alert('Remove all event');
//   // }
//   render(){
//     return (
//     <div>
//     <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//     {
//       // this.props.options.map((options) => <p key={options}>{options}</p>]
//      // this.props.options.map((option) => <Option key={option} optionText={option})
//     }
//       // Example task for using react component
//       // {this.props.options.length}
//     </div>
//     );
//   }
// }


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






