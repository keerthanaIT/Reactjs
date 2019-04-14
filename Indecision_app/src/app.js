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
  render(){
    return (
    <div>
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
  render() {
    return (
    <div>
      {this.probs.optionText}
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













