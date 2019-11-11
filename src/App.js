import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';


function App() {
  const buttonText = "Learn";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          <Button text={buttonText}>
          </Button>
          {/* <>
            <p>1</p>
            <p>1</p>
          </> */}
          {/* {buttonText} */}
          {/* {1 === 2 ? buttonText : "FALSE"} */}
        </a>
      </header>
    </div>
  );
}

export default App;
