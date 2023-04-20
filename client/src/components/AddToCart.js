import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';


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

    return (
        <Container>
            <Card style={{width: '45rem'}}>
                <Card.Img variant="top" src={item.image} alt={item.description}/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Price: ${item.price}</Card.Subtitle>
                    <form onSubmit={handleSubmit} >
                        <Button type="submit">Add to Cart</Button>
                        <Alert variant="success">Item added to cart!</Alert>
                    </form>
                </Card.Body>
            </Card>
        </Container>

    )
}

export default AddToCart;