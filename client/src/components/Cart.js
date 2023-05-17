import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import CartEditorView from "./CartEditorView";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


function Cart({currentOrder, setCount, count, setCurrentOrder}) {
// items in cart are associated dish_order_instances
    const [itemsInCart, setItemsInCart] = useState([])
    const [areItemsFound, setAreItemsFound] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const [selectedCartItem, setSelectedCartItem] = useState('')

    const handleResponse = r => {
        if (r.ok) {
            console.log( "STATUS:", r.status)
            r.json().then(r => {
                setItemsInCart(r.dish_orders)
                console.log(r.cartTotal)
            })
            setAreItemsFound(true)
            
        } else {
            console.error("STATUS:", r.status)
            r.text().then((r) => {
                console.warn(r)
                setAreItemsFound(false)
            })
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5555/orders/${currentOrder.id}`)
        .then(response => handleResponse(response))
    }, [])



  const handleEditItemsInCart = (updatedItemObj) => {
    console.log(updatedItemObj)
    const updatedItems = itemsInCart.map((item) => {
        console.log(item)
        if(item.id === updatedItemObj.id){
            return updatedItemObj;
        } else {
            return item
        }
    })
    setItemsInCart(updatedItems)
    console.log(itemsInCart)
  }

  function handleChangeForm(name, value) {
    setSelectedCartItem({
      ...selectedCartItem,
      [name]: value,
    });
  }

    const handleRemoveFromCartItems = doomedDishOrderId => {
        const afterDeletedItems = itemsInCart.filter(itemInCart => {
          return itemInCart.id !== doomedDishOrderId
        })
    
        setItemsInCart(afterDeletedItems)
    }

    const handleEditMode = (e) => {
        setIsEditMode(!isEditMode)
    }

    const displayCartItems = itemsInCart.map((i) => {
        return (
            <CartItem 
                key={i.id} id={i.id} i={i} 
                handleEditMode={handleEditMode} 
                handleSelectedItem={setSelectedCartItem}
                handleRemoveFromCartItems={handleRemoveFromCartItems}
                setCount={setCount}
                count={count}
            />
        )
    })

    const history = useHistory();
    const handleOrderSubmit = (e) => {
        e.preventDefault()
        history.push("/ordersuccess");

        setCount(0)

        setCurrentOrder("")
    }

    const getCartView = () => {
        if (isEditMode) {
            return <CartEditorView 
                        handleEditMode={handleEditMode} 
                        selectedCartItem={selectedCartItem}
                        handleEditItemsInCart={handleEditItemsInCart}
                        handleChangeForm ={handleChangeForm}
                    />
        } else {
            return (
                <div>
                    {areItemsFound ? 
                    <div>
                    {displayCartItems}
                    <br />
                    <Container>
                    <Form onSubmit={handleOrderSubmit}>
                        <Button id="orderButton" type="submit">PLACE YOUR ORDER</Button>
                    </Form>
                    </Container>
                    </div> :
                    <EmptyCart />
                    }
                </div>
            )
        }
    }

    return (
        <div>{getCartView()}</div>
    )
}

export default Cart;