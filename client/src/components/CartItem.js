


function CartItem({i, handleEditMode, handleSelectedItem, handleRemoveFromCartItems}) {

    const handleClick = (e) => {
        handleSelectedItem(i)
        handleEditMode()
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
        fetch(`http://localhost:5555/dishorders/${i.id}`, {
        method: "DELETE"})

        .then(response => handleDeleteResponse(response))

        handleRemoveFromCartItems(i.id)
    }

    return (
        <div key={i.id}>
                        <h1>{i.potato_dish.name}</h1>
                        <img src={i.potato_dish.image}/>
                        <h2>Price: {i.potato_dish.price}</h2>
                        <h2>Notes for the Chef: {i.note_to_chef}</h2>
                        <h2>Quantity: 1 </h2>
                        <button onClick={handleClick}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
    )
}

export default CartItem;