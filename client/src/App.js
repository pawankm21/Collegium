import "./App.css";
import React, { useState, useLayoutEffect} from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import EventCard from "./components/eventcard";
import Login from "./components/login";
import Register from "./components/register";
import EventCardSmall from "./components/EventCardSmall";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [apiResponse, setApiResponse] = useState();
  const [showCard, setShowCard] = useState(true);
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
  // const hideCardHandler = () => {
  //  // for onClose prop on EventCardSmall
  //   setShowCard(false);
  // }
  return (
    <Router>
      <div className="App">
        <EventCard
          tags={["women", "all"]}
          imageurl="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
          name="Big event"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, odio nostrum nemo quaerat in eius eligendi quidem quas culpa dolor tempore ipsa assumenda sit omnis quod minima eum inventore officiis."
        />
      </div>
      <Switch>
        <Route exact path="/">
          {isAuth ? <Redirect to="/dashboard" /> : <Hero isAuth={isAuth} />}
        </Route>

        <Route exact path="/login">
          {!isAuth ? <Login /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/about">
          {/* <UserProfileSmall/> */}
          {/* <UserProfileBig/> */}
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
        <Route exact path="events/:id"></Route>
      </Switch>
    </Router>
  );
}

export default App;
