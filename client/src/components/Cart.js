import React, {useEffect, useState} from "react";

function Cart({currentOrder}) {

    const [itemsInCart, setItemsInCart] = useState([])
    const [areItemsFound, setAreItemsFound] = useState(false)

    const handleResponse = r => {
        if (r.ok) {
            console.log( "STATUS:", r.status)
            r.json().then(r => setItemsInCart(r.potato_dishes))
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


    const displayCartItems = itemsInCart.map(i => {
        return (
            <div>
                <h1>{i.name}</h1>
                <h2>Price: {i.price}</h2>
            </div>
        )
    })

    return (
        <div>
            {areItemsFound ? 
            displayCartItems :
            <div>
                There's nothing in your cart yet
            </div>
            }
      
        </div>
    )
}

export default Cart;