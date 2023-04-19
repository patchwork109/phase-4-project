import React from "react";

function CartEditorView ({handleEditMode, selectedCartItem, handleEditItemsInCart, handleChangeForm}) {
    const { name, image, } = selectedCartItem.potato_dish;
    const {note_to_chef} = selectedCartItem

    const handleChefNotes = (e) => {
        handleChangeForm(e.target.name, e.target.value)
    }

    const handleResponse = r => {
        if (r.ok) {
            console.log( "STATUS:", r.status)
            r.json().then(console.log)
            .then(handleEditItemsInCart)

        } else {
            console.error("STATUS:", r.status)
            r.text().then(console.warn)
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:5555/dishorders/${selectedCartItem.id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                note_to_chef:selectedCartItem.note_to_chef
            })
        })
        .then(r => handleResponse(r))
        handleEditMode()
    }

    return (
        <div>
            <img src = {image}/>
            <h1>{name}</h1>
            <form onSubmit = {handleSubmit}>
                <label>Note to the Chef</label>
                <input 
                onChange = {handleChefNotes} 
                type = "text" 
                value = {note_to_chef}
                name = "note_to_chef">
                </input>
                <br />
              <button>SAVE</button>  
            </form>
            <button onClick={handleEditMode}>CANCEL</button>
            
        </div>
    )
}

export default CartEditorView;

