


// rendering the header

// ReactDOM.render(<h1>Index</h1>, document.getElementById('app'));



//rendering the list   

// ReactDOM.render(
//   <ul>
//   <li> one</li>
//   <li>two</li>
//   <li>three</li>
//   </ul>
//   , document.getElementById('app'));

// functional components

// function MyApp(){
//   return(
//     <ul>
//     <li>four </li>
//     <li> five </li>
//     <li> six </li>
//     </ul>
//     )
// }
// ReactDOM.render(<MyApp />, document.getElementById("app"))

function MyInfo() {
  return (
    <div>
      <h1>Index</h1>
      <p>This is a paragraph </p>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />, document.getElementById("app"))





