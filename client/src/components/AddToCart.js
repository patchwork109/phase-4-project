import React, { useState } from "react";

function AddToCart({item, currentOrder}){

    const handleSubmit = (e) => {
        e.preventDefault()
        const new_dish_order = {
            order_id: currentOrder.id,
            potato_dish_id: item.id
        }

        fetch("http://localhost:5555/dishorders", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(new_dish_order)
        })

    }

    return (
        <div>
            <image src="" />
            <p>Price: {item.price}</p>
            <form onSubmit={handleSubmit} >
                <button type="submit">Add to Cart</button>
            </form>
        </div>

    )
}

export default AddToCart;