//todo app 

// function App() {
//     return (
//         <div>
//             <input type="checkbox" />
//             <p>Placeholder text here</p>
            
//             <input type="checkbox" />
//             <p>Placeholder text here</p>
            
//             <input type="checkbox" />
//             <p>Placeholder text here</p>
            
//             <input type="checkbox" />
//             <p>Placeholder text here</p>
//         </div>
//     )
// }
// ReactDOM.render(<App />, document.getElementById("app"))




















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






// practice for functional component
// function MyInfo() {
//   return (
//     <div>
//       <h1>Index</h1>
//       <p>This is a paragraph </p>
//       <ul>
//         <li>one</li>
//         <li>two</li>
//         <li>three</li>
//       </ul>
//     </div>
//   )
// }

// ReactDOM.render(<MyInfo />, document.getElementById("app"))









// parent, child component

// function Footer() {
//     return (
//         <footer>This is the footer</footer>
//     )
// }

// function Header() {
//     return (
//         <header>This is the header</header>
//     )
// }

// function MainContent() {
//     return (
//         <main>This is the main section</main>
//     )
// }

// function App() {
//     return (
//         <div>
//             <Header />
//             <MainContent />
//             <Footer />
//         </div>
//     )
// }


// ReactDOM.render(<App />, document.getElementById("app"))







// jsx to javascript and back
// function App() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay
  
//   if (hours < 12) {
//     timeOfDay = "morning"
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon"
//   } else {
//     timeOfDay = "night"
//   }
  
//   return (
//     <h1>Good {timeOfDay}!</h1>
//   )
// }

// ReactDOM.render(<App />, document.getElementById("app"))









