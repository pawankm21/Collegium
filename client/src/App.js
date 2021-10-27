import "./App.css";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Team from "./components/Team";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/" component={Hero} />
      <Route exact path="/about" component={About} />
      <Route exact path="/team" component={Team} />
    </Router>
  );
}

export default App;
