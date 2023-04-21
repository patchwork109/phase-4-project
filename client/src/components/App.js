import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Menu from "./Menu";
import Order from "./Order";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Cart from "./Cart";
import OrderSuccess from "./OrderSuccess";
import "./style.css";

function App() {

  const [menuItems, setMenuItems] = useState([])
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [currentOrder, setCurrentOrder] = useState('')
  const [showBigForm, setShowBigForm] = useState(false)


  useEffect(() => {
    fetch('http://localhost:5555/potatodishes')
    .then(response => response.json())
    .then(setMenuItems)
  }, [])

  useEffect(() =>{
    fetch("/currentuser")
    .then(r =>  {
      if(r.ok) {
        r.json().then(user => updateUser(user) )
      } 
    })
  }, [])

  const onClickStartNew = () => {
    setShowBigForm(!showBigForm)
    const new_order= {
      customer_name: "newCustomer"
    }
    fetch("http://localhost:5555/orders", {
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(new_order)
    })
    .then(r=>r.json())
    .then(orderObj => setCurrentOrder(orderObj))
  }


  const updateUser = (user) => setUser(user) 
  const onLogout = () => {
    setUser(null)
    setCurrentOrder('')
  }

  return (
    <div>
      <Router>
      <NavBar user={user} onLogout={onLogout} count={count}/>
        <Switch>
          <Route path="/menu">
            <Menu menuItems={menuItems}/>
          </Route>
          <Route exact path="/order">
            <Order showBigForm={showBigForm} onClickStartNew={onClickStartNew} currentOrder={currentOrder} menuItems={menuItems} setCount={setCount} count={count} user={user} updateUser={updateUser}/>
          </Route>
          <Route exact path="/cart">
            <Cart currentOrder={currentOrder} setCount={setCount} count={count}/>
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/ordersuccess">
            <OrderSuccess />
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
