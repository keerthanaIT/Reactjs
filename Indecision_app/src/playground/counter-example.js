class Counter extends React.Component{
  constructor(props) {
    super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
        count:0
      };

    }
    componentWillMount(){
      console.log("component will be mounted");
    }
    componentDidMount(){
      console.log("component did the mounted state");
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10);

      if(!isNaN(count)) {
        this.setState(() => ({ count }));
      }



    }
    componentDidUpdate(prevState,prevProps){
      console.log("privious state---",prevState);
      console.log("privious props---",prevProps)
      console.log("component is thus updated using states or props");
      if(prevState.count !== this.state.count){
        localStorage.setItem('count',this.state.count);
      }
    }
  
  handleAddOne(){
    this.setState((prevState) => {

      return {
        count:prevState.count + 1

      };
    });
    console.log('Adding  One');
  }
  handleMinusOne(){
    this.setState((prevState) => {
      return{
        count:prevState.count - 1 
      }

    });
    console.log('Minus ONe by One');
  }

  handleReset(){
    this.setState(() =>{
      return {
        count:0
      };
    });
    this.setState((prevState) =>{
      return {
        count:prevState.count +1
      };
    });
    // this.setState(()=>{
    //   return{
    //     count:0
    //   };
    // });
    // this.setState({
    //   count: this.state.count +1 ;
    // })
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