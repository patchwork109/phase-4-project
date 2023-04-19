import React, {useState} from "react";

function CartEditorView ({handleEditMode, selectedCartItem, handleEditItemsInCart, handleChangeForm}) {
    const { name, image, } = selectedCartItem.potato_dish;
    const {note_to_chef} = selectedCartItem
    

    const handleChefNotes = (e) => {
        handleChangeForm(e.target.name, e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        fetch(`http://localhost:5555/dishorders/${selectedCartItem.id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(selectedCartItem.potato_dish)
        })

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

