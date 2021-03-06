import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Admin from "./components/Admin";

function App() {
  return (
    <Router basename="/">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/articles" component={Articles} />
        <Route path="/admin" component={Admin} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
