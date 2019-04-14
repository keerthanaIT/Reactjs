class Counter extends React.Component{
  constructor(probs){
    super(probs){
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);

    }
  }
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
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>



      );
  }
}
ReactDOM.render(<Counter />, document.getElementById('app'));