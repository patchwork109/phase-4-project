import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { BsTrash } from 'react-icons/bs';
import { MdOutlineEdit } from 'react-icons/md';


function CartItem({i, handleEditMode, handleSelectedItem, handleRemoveFromCartItems, setCount, count}) {

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

        setCount(count - 1)
    }

    return (
        <Container>
            <Card style={{width: '25rem'}}>
                <div key={i.id}>
                    <Card.Img variant="top" src={i.potato_dish.image} alt={i.potato_dish.description}/>
                    <Card.Body>
                        <Card.Title>{i.potato_dish.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Price: ${i.potato_dish.price}</Card.Subtitle>
                        <Card.Text>Notes for the Chef: {i.note_to_chef}</Card.Text>
                        <Card.Text>Quantity: 1</Card.Text>
                        <Button onClick={handleClick} variant="primary">Edit <MdOutlineEdit/></Button>
                        <Button onClick={handleDelete} variant="secondary">Delete <BsTrash/></Button>
                    </Card.Body>
                </div>
            </Card>
        </Container>
    )
}

export default CartItem;