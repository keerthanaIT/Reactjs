class Counter extends React.Component{
  constructor(probs){
    super(probs){
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
        count:0
      };

    }
  }
  handleAddOne(){
    this.setState((prevState) => {

      return {
        count:prevState.count +1;

      };
    });
    console.log('Adding  One');
  }
  handleMinusOne(){
    this.setState((prevState) => {
      return{
        count:prevState.count -1 ;
      }

    });
    console.log('Minus ONe by One');
  }

  handleReset(){
    this.setState(()=>{
      return{
        count:0
      };
    });
    console.log("resetting the count");
  }




  render(){
    return(
      <div>
        <h1> Count:{this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>



      );
  }
}
ReactDOM.render(<Counter />, document.getElementById('app'));