import "./App.css";
import React, { useState, useLayoutEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import EventCard from "./components/eventcard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [apiResponse, setApiResponse] = useState();
  const [isAuth, setIsAuth] = useState(false);
  function callAPI() {
    fetch("http://localhost:9000/event")
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  }
  useLayoutEffect(() => {
    callAPI();
  });
  return (
    <Router>
      <div className="App">
        {/* <EventCard/> */}
        {/* <p>{apiResponse}</p> */}
      </div>
      <Switch>
        <Route exact path="/">
          {isAuth ? <Redirect to="/dashboard" /> : <Hero isAuth={isAuth} />}
        </Route>
        <Route exact path="/dashboard">
          {isAuth ? <Navbar isAuth={isAuth} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/login">
          {!isAuth?<></>:<Redirect to="/"/>}
        </Route>
        <Navbar isAuth={isAuth} />
        <Route exact path="/about"></Route>
        <Route exact path="/team"></Route>

        <Router exact path="/logout">
          <Redirect to="/"></Redirect>
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
