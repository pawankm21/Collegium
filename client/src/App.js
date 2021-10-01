
import './App.css';
import React,{useState,useLayoutEffect} from 'react';
function App() {
  const [apiResponse, setApiResponse] = useState();
  function callAPI() {
    fetch("http://localhost:9000/API")
        .then(res => res.text())
        .then(res => setApiResponse( res ));
}
  useLayoutEffect(() => {
    callAPI();

  })
  return (
    <div className="App">
      <p>{ apiResponse}</p>
    </div>
  );
}

export default App;
