"use strict";

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
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Index"
    ),
    React.createElement(
      "p",
      null,
      "This is a paragraph "
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        "one"
      ),
      React.createElement(
        "li",
        null,
        "two"
      ),
      React.createElement(
        "li",
        null,
        "three"
      )
    )
  );
}

ReactDOM.render(React.createElement(MyInfo, null), document.getElementById("app"));
