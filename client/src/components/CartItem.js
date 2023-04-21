import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
            <Row>
            <Col>
                <Card className="cartItemCard">
                    <div key={i.id}>
                        <Card.Header as="h3" className="cardHeader" style={{backgroundColor: "#1746A2", color: "white"}}>{i.potato_dish.name}</Card.Header>
                        <Card.Img variant="top" src={i.potato_dish.image} alt={i.potato_dish.description}/>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted"><strong>Price:</strong> ${i.potato_dish.price}</Card.Subtitle>
                            <Card.Text><strong>Notes for the chef:</strong> {i.note_to_chef}<br/><strong>Quantity:</strong> 1</Card.Text>
                            <Button className="editButton" onClick={handleClick} variant="primary">Edit <MdOutlineEdit/></Button>
                            <Button onClick={handleDelete} variant="secondary">Delete <BsTrash/></Button>
                        </Card.Body>
                    </div>
                </Card>
            </Col>
            </Row>
        </Container>
    )
}

export default CartItem;