import React, {useState} from "react";
import AddToCart from "./AddToCart";
import Authentication from "./Authentication";
import Button from 'react-bootstrap/Button';




function Order({menuItems, setCount, count, updateUser, user, currentOrder, handleCurrentOrder}) {
  const [showBigForm, setShowBigForm] = useState(false)


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
    .then(orderObj => handleCurrentOrder(orderObj))
  }

  return (
    <div>
          <div>
            {(user === null) ? <Authentication updateUser={updateUser} /> : <Button onClick={onClickStartNew} >Start New Order</Button> }
             {showBigForm ? displayForms : <div></div> }
          </div>
    </div>

  )

}

export default Order;