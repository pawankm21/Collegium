import "./App.css";
import React, { useState, useLayoutEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import EventCard from "./components/eventcard";
import Login from "./components/login";
import Register from "./components/register";
import UserProfileSmall from "./components/UserProfileSmall";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [apiResponse, setApiResponse] = useState();
  const [isAuth, setIsAuth] = useState(true);
  function callAPI() {
    fetch("http://localhost:9000/event")
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  }
  useLayoutEffect(() => {
    callAPI();
    console.log(apiResponse);
  });
  return (
    <Router>
      <div className="App">{/* <EventCard/> */}</div>
      <Switch>
        <Route exact path="/">
          {isAuth ? <Redirect to="/dashboard" /> : <Hero isAuth={isAuth} />}
        </Route>

        <Route exact path="/login">
          {!isAuth ? <Login /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/about">
          <UserProfileSmall />
        </Route>
        <Route exact path="/team"></Route>
        <Route exact path="/register">
          {isAuth ? <Redirect to="/dashboard" /> : <Register />}
        </Route>
        <Route exact path="/logout">
          <Redirect to="/"></Redirect>
        </Route>
        <Navbar isAuth={isAuth} />
        <Route exact path="/dashboard">
          {isAuth ? <></> : <Redirect to="/login" />}
        </Route>
        <Route exact path="events/:id">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
