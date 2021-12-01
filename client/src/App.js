import "./App.css";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Team from "./pages/Team";
import NewEvent from "./components/NewEvent";

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
      <Route exact path="/new-event" component={ NewEvent}/>
    </Router>
  );
}

export default App;
