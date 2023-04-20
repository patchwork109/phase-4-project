import React, { useState } from "react";

function AddToCart({item, currentOrder, setCount, count}){

    const handleSubmit = (e) => {
        e.preventDefault()
        const new_dish_order = {
            order_id: currentOrder.id,
            potato_dish_id: item.id
        }


        const handleResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(console.log)
            } else {
                console.error("STATUS:", r.status)
                r.text().then(console.warn)
            }
        }

        fetch("http://localhost:5555/dishorders", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(new_dish_order)
        })
        .then (r => handleResponse(r))

        setCount(count + 1)
    }
//////////////////////// add images!!! ////////////////////
    return (
        <div>
            <img src={item.image}/>
            <p>Price: {item.price}</p>
            <form onSubmit={handleSubmit} >
                <button type="submit">Add to Cart</button>
            </form>
            <br />
        </div>

    )
}

export default AddToCart;