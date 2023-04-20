import { useFormik } from "formik";
import * as yup from "yup"
import React, {useState} from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom";

//need to install yup: npm i yup
//currently this lives in the About Us page for testing purposes

function Authentication () {

    const [signUp, setSignUp] = useState(false)
    const history = useHistory()

    const handleClick = () => setSignUp((signUp) => !signUp)

    const formSchema = yup.object().shape({
        name: yup.string().required("Please enter a username!"),
        email: yup.string().email()
    })
// initial values are like setting the form data initial state

    const formik = useFormik({
        initialValues: {
            name: "",
            email: ""
        },
        validationSchema:formSchema, 
        onSubmit:(values) => {
            fetch(signUp? "/users" : "/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(values)
            }) 
        }
    })

    return (
        <>
        <h1>Log in or Sign up</h1>
        <button onClick={handleClick}>{signUp ? "Log In" : "Sign Up!"}</button>
        <form onSubmit={formik.handleSubmit()}>
            <label>Username</label>
            <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange}/>
            {signUp&&(
                <>
                <label>Email</label>
                <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange}/>
                </>
            )}
            <input type="submit"  value={signUp? "Sign Up" : "Log In" }/>
        </form>
        </>
    )

}


export default Authentication;
