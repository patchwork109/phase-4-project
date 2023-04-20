import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Header from "./Header";
import Menu from "./Menu";
import Order from "./Order";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import "./style.css";

function App() {

  const [menuItems, setMenuItems] = useState([])
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5555/potatodishes')
    .then(response => response.json())
    .then(setMenuItems)
  }, [])


  return (
    <div>
      <Router>
      <NavBar count={count}/>
        <Switch>
          <Route path="/menu">
            <Menu menuItems={menuItems}/>
          </Route>
          <Route path="/order">
            <Order menuItems={menuItems} setCount={setCount} count={count}/>
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route exact path ="/">
           <HomePage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>

  )

}

export default App;
