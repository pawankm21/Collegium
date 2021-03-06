import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NewEvent from "./pages/NewEvent";
import ShowEvent from "./pages/ShowEvent";
import Settings from "./pages/Settings";
import EditEvent from "./pages/EditEvent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { isAuthenticated } from "./components/utilities";
function AuthenticatedRoutes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/new-event" component={NewEvent} />
        <Route exact path="/events/:id" component={ShowEvent} />
        <Route exact path="/edit-event/:id" component={EditEvent} />
        <Route exact path="/settings" component={Settings} />
       
      </Switch>
    </Router>
  );
}
function App() {
  if (true) {
    return <AuthenticatedRoutes />;
  }
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Hero} />
      </Switch>
    </Router>
  );
}

export default App;
