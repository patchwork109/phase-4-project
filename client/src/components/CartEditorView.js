import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function CartEditorView ({handleEditMode, selectedCartItem, handleEditItemsInCart, handleChangeForm}) {
    const { name, image, } = selectedCartItem.potato_dish;
    const {note_to_chef} = selectedCartItem

    const handleChefNotes = (e) => {
        handleChangeForm(e.target.name, e.target.value)
    }

    const handleResponse = r => {
        if (r.ok) {
            console.log( "STATUS:", r.status)
            r.json().then((updatedObj) => {
                console.log(updatedObj)
                handleEditItemsInCart(updatedObj)
            })
            

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
        <Container>
            <Card style={{width: '35rem'}}>
            <Card.Img variant="top" src = {image} alt={name}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Form onSubmit = {handleSubmit}>
                    <Form.Label><strong>Note to the Chef:</strong></Form.Label>
                    <Form.Control 
                        onChange = {handleChefNotes} 
                        type = "text" 
                        value = {note_to_chef}
                        name = "note_to_chef">
                    </Form.Control>
                    <Form.Text className="text-muted">
                        Let us know how we can make your order even better.
                    </Form.Text>
                    <br />
                    <br />
                    <Button variant="primary" type="submit">Save</Button>  
                </Form>
            <Button onClick={handleEditMode} variant="secondary">Cancel</Button>
            </Card.Body>
            </Card>
        </Container>
    )
}

export default CartEditorView;

