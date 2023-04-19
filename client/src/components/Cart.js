import React, {useEffect, useState} from "react";
import CartEditorView from "./CartEditorView";
import CartItem from "./CartItem";


//need to give delete button functionality
//need to do something with place order button
//need to give PATCH fetch to SAVE button

function Cart({currentOrder}) {
// items in cart are associated dish_order_instances
    const [itemsInCart, setItemsInCart] = useState([])
    const [areItemsFound, setAreItemsFound] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const [selectedCartItem, setSelectedCartItem] = useState('')

    const handleResponse = r => {
        if (r.ok) {
            console.log( "STATUS:", r.status)
            r.json().then(r => setItemsInCart(r.dish_orders))
            setAreItemsFound(!areItemsFound)
            
        } else {
            console.error("STATUS:", r.status)
            r.text().then(console.warn)
        }
    }

    useEffect(() => {
    fetch(`http://localhost:5555/orders/${currentOrder.id}`)
    .then(response => handleResponse(response))
  }, [])



  const handleEditItemsInCart = (updatedItem) => {
    const updatedItems = itemsInCart.map((i) =>
    i.id === updatedItem.id ? updatedItem : i 
    )
    setSelectedCartItem(updatedItem)
    setItemsInCart(updatedItems)
  }

  function handleChangeForm(name, value) {
    setSelectedCartItem({
      ...selectedCartItem,
      [name]: value,
    });
  }

  const handleDeleteResponse = r => {
        if (r.ok) {
            console.log( "STATUS:", r.status)
            r.json().then(console.log)  
        } else {
            console.error("STATUS:", r.status)
            r.text().then(console.warn)
        }
    }

    const handleDelete = () => {
    console.log("deleting!")
    }

//   const handleRemoveFromCartItems = (doomed_dish_order) => {
//     const afterDeletedItems = 
//   }

    const handleEditMode = (e) => {
        setIsEditMode(!isEditMode)
    }

    const displayCartItems = itemsInCart.map((i) => {
                return (
                    <CartItem 
                    key={i.id} id={i.id} i={i} 
                    handleEditMode={handleEditMode} 
                    handleSelectedItem={setSelectedCartItem}
                    handleDelete={handleDelete} />
                )
            }
    )


    const getCartView = () => {
        if (isEditMode) {
            return <CartEditorView 
                    handleEditMode={handleEditMode} 
                    selectedCartItem={selectedCartItem}
                    handleEditItemsInCart={handleEditItemsInCart}
                    handleChangeForm ={handleChangeForm}
                    />
        } else {
            return (
                <div>
                    {areItemsFound ? 
                    <div>
                    {displayCartItems}
                    <br />
                    <form>
                        <button>PLACE YOUR ORDER</button>
                    </form>
                    </div> :
                    <div>There's nothing in your cart yet</div>
                    }
                </div>
            )
        }
    }

    return (
        <div>{getCartView()}</div>
    )
}

export default Cart;