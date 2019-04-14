const obj = {
  name:'examplename',
  getName(){
    return this.name;
  }
};

const getName = obj.getName.bind({name:'Tommy'});
console.log(getName());








class IndecisionApp extends React.Component {
  render(){
    const title = "Indecision";
    const subtitle = "This is a subtitle for using probs concept";
    const options = ["one","too","three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Option options={options}/>
        <AddOption />
      </div>
      );
  }
}








class Header extends React.Component {
  render(){
    return (
    <div>
      <h1>{this.probs.title}</h1>
      <h2>{this.probs.subtitle}</h2>
      <p>This is From  header</p>   
    </div>
    );
    
  }
}


class Action extends React.Component {
  onClickAlert(){
    alert('example for event handler');
  }
  render(){
    return(
    <div>
      <button onClick={this.onClickAlert}>this is button</button>
       <p>This is from Actions</p>;
    </div>
    );
    
  }
}



class Option extends React.Component {
  constructor(probs){
    super(probs);
    this.onClickRemove = this.onClickRemove.bind;
  }
  onClickRemove(){
    alert('Remove all event');
  }
  render(){
    return (
    <div>
    <button onClick={this.onClickRemove.bind(this)}>Remove All</button>
    {
      // this.probs.options.map[(options) => <p key={options}>{options}</p>]
     this.probs.options.map((option) => <Option key={option} optionText={option})
    }



      // Example task for using react component
      // {this.probs.options.length}
    </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option){
      alert(option);
    }
  }
  render() {
    return (
    <div>
      <form onSubmit={this.handleAddOption}>
      <input type="text" name="option" />
      <button> Add Option </button>
      </form>




      // {this.probs.optionText}
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











ReactDOM.render(<IndecisionApp />, document.getElementById('app'));













