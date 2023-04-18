import React, {useState} from "react";
import AddToCart from "./AddToCart";
// import { Formik } from 'formik'

function Order({menuItems}) {
 const [showBigForm, setShowBigForm] = useState(false)



  const displayForms = menuItems.map(item => {
    return (
      <AddToCart item={item} key={item.id}/>
    )
  })

  const onClickStartNew = () => {
    setShowBigForm(!showBigForm)
  }

  return (
    <div>
      <button onClick={onClickStartNew} >Start New Order </button>
        <div>
         {displayForms}
        </div>
      {/* //custom form here */}
    </div>

  )

}

export default Order;