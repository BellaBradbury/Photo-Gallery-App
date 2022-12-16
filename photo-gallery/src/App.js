// import React, { Component } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import apiKey from './config';

// APP COMPONENTS
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import PhotoContainer from './components/PhotoContainer';

function App() {
  return (
    <div className='container'>
      <SearchForm />
      <MainNav />
      <PhotoContainer />
      </div>
  )
}



// export default class App extends Component {

//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div className='container'>
//         <SearchForm />
//         <MainNav />
//         {/* <Routes>
//           <Route />
//         </Routes> */}
//         <PhotoContainer />
//       </div>
//     );
//   }
// }




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;