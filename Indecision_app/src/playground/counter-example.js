class Counter extends React.Component{
  handleAddOne(){
    console.log('Adding  One');
  }
  handleMinusOne(){
    console.log('Minus ONe by One');
  }

  handleReset(){
    console.log("resetting the count");
  }




  render(){
    return(
      <div>
        <h1> Count: </h1>
        <button>+1</button>
        <button>-1</button>
        <button>reset</button>
      </div>



      );
  }
}
ReactDOM.render(<Counter />, document.getElementById('app'));