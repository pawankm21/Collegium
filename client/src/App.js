import "./App.css";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Team from "./pages/Team";
import NewEvent from "./pages/NewEvent";
import ShowEvent from "./pages/ShowEvent";
import Settings from "./pages/Settings";
import {
  BrowserRouter as Router,
  Route,

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
      <Route exact path="/new-event" component={NewEvent} />
      <Route exact path="/events/:id" component={ShowEvent} />
      <Route exact path="/settings" component={Settings} />
    </Router>
  );
}

export default App;
