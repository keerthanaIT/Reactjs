class IndecisionApp extends React.Component {
  render(){
    return (
      <div>
        <Header title="Indecision Apps"/>
        <Action />
        <Option />
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
      <h2>This is a Ubundu OS Computer</h2>
      <p>This is From  header</p>   
    </div>
    );
    
  }
}


class Action extends React.Component {
  render(){
    return(
    <div>
      <button>this is button</button>
       <p>This is from Actions</p>;
    </div>
    );
    
  }
}



class Option extends React.Component {
  render(){
    return (
    <div>
      Example task for using react component
    </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
    <div>
      Example task for additional options in reactjs
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













