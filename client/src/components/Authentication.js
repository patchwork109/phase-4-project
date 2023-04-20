import { useFormik } from "formik";
import * as yup from "yup"
import React, {useState} from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Button from 'react-bootstrap/Button';

//need to install yup: npm i yup
//currently this lives in the About Us page for testing purposes

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
                console.log(user)
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
        {Object.values(formik.errors).map(error => <h2  style={{color:'red'}}>{error}</h2>)}
        <h1>Log in or Sign up</h1>
        <Button onClick={handleClick}>{signUp ? "Log In" : "Sign Up!"}</Button>
        <form onSubmit={formik.handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange}/>
            {signUp&&(
                <>
                <label>Email</label>
                <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange}/>
                </>
            )}
            <Button type="submit">{signUp? "Sign Up" : "Log In" }</Button>
        </form>
        </>
    )

}


export default Authentication;
