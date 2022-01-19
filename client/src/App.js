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
import Navbar from "./components/Navbar";
import { Switch } from "@headlessui/react";
function AuthenticatedRoutes()
{
  return (
    <Switch>
      <Navbar/>
      <Route path="/" component={Dashboard} />
      <Route path="/settings" component={Settings} />
      <Route path="/new-event" component={NewEvent} />
      <Route path="" />

    </Switch>
  );
}
function App() {
  return (
    <Router>
      <Switch>
        
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/" component={AuthenticatedRoutes}/>
     </Switch>
    </Router>
  );
}

export default App;
