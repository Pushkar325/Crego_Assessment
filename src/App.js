// import logo from './logo.svg';
// import './App.css';

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

// export default App;









import React from 'react';
import ExpressionForm from './ExpressionForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expression Engine UI</h1>
      </header>
      <main>
        <ExpressionForm />
      </main>
    </div>
  );
}

export default App;
