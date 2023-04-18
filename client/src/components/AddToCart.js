import React, { useState } from "react";

function AddToCart({item, id}){

    const [orderId, setOrderId] = useState('')

    const handleSubmit = () => {
        // new_order = {
        order_id: 
        // }

        fetch("/", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({

            })
        })
    }

    return (
        <div>
            <form >
                <button type="submit">Add to Cart</button>
            </form>
        </div>

    )
}

export default AddToCart;