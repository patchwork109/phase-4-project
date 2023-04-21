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
            <Card className="cartItemCard">
                <Card.Header as="h3" className="cardHeader" style={{backgroundColor: "#F45050", color: "white"}}>{name}</Card.Header>
                <Card.Img variant="top" src = {image} alt={name}/>
                <Card.Body>
                    <Form onSubmit = {handleSubmit}>
                        <Form.Label><strong>Note for the chef:</strong></Form.Label>
                        <Form.Control 
                            onChange = {handleChefNotes} 
                            type = "text" 
                            value = {note_to_chef}
                            name = "note_to_chef">
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Let us know how we can take your order to another planet.
                        </Form.Text>
                        <br />
                        <br />
                        <Button className="saveChangesButton" variant="primary" type="submit">Save</Button>  
                    </Form>
                <Button onClick={handleEditMode} variant="secondary">Cancel</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default CartEditorView;

