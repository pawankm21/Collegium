
import './App.css';
import React,{useState,useLayoutEffect} from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import EventCard from './components/eventcard';
function App() {
  const [apiResponse, setApiResponse] = useState();
  function callAPI() {
    fetch("http://localhost:9000/event")
        .then(res => res.text())
        .then(res => setApiResponse( res ));
}
  useLayoutEffect(() => {
    callAPI();

  })
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <EventCard/> */}
      <Hero/>
      {/* <p>{apiResponse}</p> */}
    </div>
  );
}

export default App;
