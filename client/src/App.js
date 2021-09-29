import logo from './logo.svg';
import './App.css';
import React,{useState,useLayoutEffect} from 'react';
function App() {
  const [apiResponse, setApiResponse] = useState();
  function callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => setApiResponse( res ));
}
  useLayoutEffect(() => {
    callAPI();

  })
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
          Learn React
        </a>
      </header>
      <p>{ apiResponse}</p>
    </div>
  );
}

export default App;
