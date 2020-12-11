import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Home from "./Views/Home";
import About from "./Views/About/About";
import Login from "./Views/Login/Login";
import Register from "./Views/Register/Register";
import Dashboard from "./Views/Dashboard";

function App() {
  return (
    <div>
      <Router>
       
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
