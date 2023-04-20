import React, {useState} from "react";
import AddToCart from "./AddToCart";
import Cart from "./Cart";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Authentication from "./Authentication";
import Button from 'react-bootstrap/Button';




function Order({menuItems, setCount, count, updateUser, user}) {
  const [showBigForm, setShowBigForm] = useState(false)
  const [currentOrder, setCurrentOrder] = useState('')
  // const history = useHistory()
  
 
  

  const displayForms = menuItems.map(item => {
    return (
      <AddToCart item={item} key={item.id} currentOrder={currentOrder} setCount={setCount} count={count}/>
    )
  })

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