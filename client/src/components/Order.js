import React, {useState} from "react";
import AddToCart from "./AddToCart";
// import { Formik } from 'formik'

function Order({menuItems}) {
  const [showBigForm, setShowBigForm] = useState(false)
  const [currentOrder, setCurrentOrder] = useState()

  const displayForms = menuItems.map(item => {
    return (
      <AddToCart item={item} key={item.id} currentOrder={currentOrder}/>
    )
  })

// need to change this to set showBigForm to true
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
      <button onClick={onClickStartNew} >Start New Order </button>
        <div>
          {showBigForm ?
          displayForms :
          <div></div>}
        </div>
      {/* //custom form here */}
    </div>

  )

}

export default Order;