import React, {useState} from "react";
import AddToCart from "./AddToCart";
import Cart from "./Cart";
import { Switch, Route } from "react-router-dom";
import Button from 'react-bootstrap/Button';


//
//  {/* <Authentication /> */} will go here

function Order({menuItems, setCount, count}) {
  const [showBigForm, setShowBigForm] = useState(false)
  const [currentOrder, setCurrentOrder] = useState('')

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
          <Button onClick={onClickStartNew}>Start New Order</Button>
          <div>
            {showBigForm ?
            displayForms :
            <div></div>} 
            {/* //custom form here */}
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