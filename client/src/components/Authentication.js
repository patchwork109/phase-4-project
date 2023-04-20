import { useFormik } from "formik";
import * as yup from "yup"
import React, {useState} from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Authentication ({updateUser}) {

    const [signUp, setSignUp] = useState(false)
    const history = useHistory()

    const handleClick = () => setSignUp((signUp) => !signUp)


    const handleResponse = r => {
        if (r.ok) {
            console.log( "STATUS:", r.status)
            r.json().then((user => {
                updateUser(user) 
                history.push('/order')
            }) )
    
            
        } else {
            console.error("STATUS:", r.status)
            r.text().then(console.log)
        }
    }

    const formSchema = yup.object().shape({
        username: yup.string().required("Please enter a username!"),
        email: yup.string().email()
    })
// initial values are like setting the form data initial state

    const formik = useFormik({
        initialValues: {
            username: "",
            email: ""
        },
        validationSchema:formSchema, 
        onSubmit:(values) => {
            fetch(signUp? "/users" : "/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(values)
            })
            .then(handleResponse)
        }
    })

    return (
        <>
        <Container className="authform rounded">
        {Object.values(formik.errors).map(error => <h2  style={{color:'red'}}>{error}</h2>)}
        <h1 className="text-light"><strong>Log in or Sign up</strong></h1>
        <Button variant="warning" onClick={handleClick}>{signUp ? "Log In" : "Sign Up!"}</Button>
        
        <Form className="text-light" onSubmit={formik.handleSubmit}>
            <Form.Label><strong>Username</strong></Form.Label>
            <Form.Control type="text" name="username" value={formik.values.username} onChange={formik.handleChange}></Form.Control>
            {signUp&&(
                <>
                <Form.Label><strong>Email</strong></Form.Label>
                <Form.Control type="text" name="email" value={formik.values.email} onChange={formik.handleChange}></Form.Control>
                </>
            )}
            <br/>
            <Button variant="warning" type="submit">{signUp? "Sign Up" : "Log In" }</Button>
        </Form>
        </Container>
        </>
    )

}


export default Authentication;
