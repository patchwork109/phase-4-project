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

  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:5555/potatodishes')
    .then(response => response.json())
    .then(setMenuItems)
  }, [])



  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path ="/">
           <HomePage />
          </Route>
          <Route path="/menu">
            <Menu menuItems={menuItems}/>
          </Route>
          <Route path="/order">
            <Order menuItems={menuItems} />
          </Route>
          <Route path="/about us">
            <AboutUs />
          </Route> 
        </Switch>
      </Router>
    </div>

  )

}

export default App;
