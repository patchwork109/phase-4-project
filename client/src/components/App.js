import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./NavBar";
import HomePage from "./HomePage";
import Header from "./Header";
import Menu from "./Menu";
import Order from "./Order";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

function App() {
 


  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path ="/" exact component={HomePage} />
          <Route path="/menu" component={Menu} />
          <Route path="/order" component={Order} />
          <Route path="/about us" component={AboutUs} />
        </Switch>
      </Router>
    </div>

  )

}

export default App;
