import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';


function AddToCart({item, currentOrder, setCount, count}){

    const [open, setOpen] = useState(false);

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

        setOpen(!open)
    }

    return (
        <Container>
            <Card className="cartItemCard">
                <Card.Header as="h3" className="cardHeader" style={{backgroundColor: "#1746A2", color: "white"}}>{item.name}</Card.Header>
                <Card.Img variant="top" src={item.image} alt={item.description}/>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted"><strong>Price:</strong> ${item.price}</Card.Subtitle>
                    <form onSubmit={handleSubmit} >
                        <Button id="addToCartButton" type="submit">Add to Cart</Button>
                            <Box sx={{ width: '100%' }}>
                                <Collapse in={open}>
                                    <Alert
                                    variant="filled"
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {setOpen(false)}}>
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                    sx={{ mb: 2, width: '100%' }}
                                    >
                                    Item added to order!
                                    </Alert>
                                </Collapse>
                            </Box>
                    </form>
                </Card.Body>
            </Card>
        </Container>

    )
}

export default AddToCart;