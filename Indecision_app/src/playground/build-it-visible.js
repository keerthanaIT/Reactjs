class VisibilityToggle extends React.Component {
  constructor(probs){
    super(probs);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
handleToggleVisibility(){
  this.setState((prevState) => {
    return {
      visibility:prevState.visibility
    };
  })
}  
  render() {
    return 
    (
      <div>
      <h1>Visibility toggle</h1>
      <button onClick={this.handleToggleVisibility}>
      {visibility ? 'hide data' : 'sho data'}
      </button>
      {visibility && (
        <div>
        <p>This is the data </p>
        </div>


        )}
      </div>


      );
  }
}
ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));