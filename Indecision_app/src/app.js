class IndecisionApp extends React.Component {
  render(){
    return (
      <div>
        <Header />
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
      <h1>Indecision</h1>
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
    </div>
    );
  }
}











ReactDOM.render(<IndecisionApp />, document.getElementById('app'));













