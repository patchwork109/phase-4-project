import React, {useState} from "react";
import AddToCart from "./AddToCart";
import Authentication from "./Authentication";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import getfryin from './letsgetfryin.png'
import StartOrderPage from "./StartOrderPage";




function Order({showBigForm, onClickStartNew, menuItems, setCount, count, updateUser, user, currentOrder}) {



  const displayForms = menuItems.map(item => {
    return (
      <AddToCart item={item} key={item.id} currentOrder={currentOrder} setCount={setCount} count={count}/>
    )
  })

  const getOrderView = () => {
    if (showBigForm) {
      return (
        <div>
          <div id="startButton">
                <Button  variant="warning" size="lg" onClick={onClickStartNew} >Start New Order</Button> 
          </div>
          {displayForms}
        </div>
        )
    } else {
      return (
        <StartOrderPage onClickStartNew={onClickStartNew}/>
      )
    }
  }


  return (
    <div>
          <div>
            {(user === null) ? 
            <Authentication updateUser={updateUser} /> : 
            getOrderView()}
          </div>
    </div>

  )

}

export default Order;