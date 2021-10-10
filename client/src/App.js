import "./App.css";
import React, { useState, useLayoutEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import EventCard from "./components/eventcard";
import Login from "./components/login";
import Register from "./components/register";
import UserProfileSmall from "./components/UserProfileSmall";
import UserProfileBig from "./components/UserProfileForm";
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
          {isAuth ? <Navbar isAuth={isAuth} /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login">
          {!isAuth?<Login/>:<Redirect to="/"/>}
        </Route>
        <Route exact path="/about">
          {/* <UserProfileSmall/> */}
          <UserProfileBig/>
        </Route>
        <Route exact path="/team"></Route>
        <Route exact path="/register">
          {isAuth? <Redirect to="/dashboard" />: <Register/>}
        </Route>
        <Router exact path="/logout">
          <Redirect to="/"></Redirect>
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
