import React, {useState, useEffect} from "react";
import AddToCart from "./AddToCart";
import Cart from "./Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Authentication from "./Authentication";

import Button from 'react-bootstrap/Button';



function Order({menuItems, setCount, count}) {
  const [showBigForm, setShowBigForm] = useState(false)
  const [currentOrder, setCurrentOrder] = useState('')
  const [user, setUser] = useState(null);
  const history = useHistory()
  
  const updateUser = (user) => setUser(user) 
  console.log(user)

  useEffect(() =>{
    fetch("/currentuser")
    .then(r =>  {
      if(r.ok) {
        r.json().then(user => updateUser(user) )
      } 
    })
  }, [])

  console.log(user)

  const displayForms = menuItems.map(item => {
    return (
      <AddToCart item={item} key={item.id} currentOrder={currentOrder} setCount={setCount} count={count}/>
    )
  })
// change this to set showBigForm to true?
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

  return (
    <div>
      <Switch>
        <Route exact path="/order">
          {/* <Button onClick={onClickStartNew}>Start New Order</Button> */}
          <div>
            {(user === null) ? <Authentication updateUser={updateUser} /> : <Button onClick={onClickStartNew} >Start New Order</Button> }
             {showBigForm ? displayForms : <div></div> }
            
          </div>
        </Route>
        <Route exact path="/order/cart">
            <Cart currentOrder={currentOrder} setCount={setCount} count={count}/>
        </Route>
        </Switch>
     
    </div>

  )

}

export default Order;