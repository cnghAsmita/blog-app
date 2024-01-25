import { useContext, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { login } from "../../../services/auth";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../../context";
import Header from "../../Header";

const FormError = ({ errors }) => {

    return (
        <Alert variant="danger">
            {
                errors?.message ? errors.message :
                    <ul>
                        {
                            Object.keys(errors).map((field) =>
                            (
                                <li>
                                    {`${errors[field][0]} = ${field}`}
                                </li>
                            )
                            )
                        }
                    </ul>
            }
        </Alert>
    )
}

const LoginForm = () => {
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState();
    const [formData, setFormData] = useState({});

    const { store, setStore } = useContext(AppContext);

    const onInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    console.log("## ", store)

    const onFormSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            event.stopPropagation();
            login({ payload: formData })
                .then((response) => {
                    setStore({
                        ...store,
                        "isAuthenticated": true,
                        ...response.data
                    })
                })
                .catch((error) => {
                    setError(error)
                })
        }
        setValidated(true);
    }


    return (
        <>
            <Header />
            <div className="form-container">
                <Form noValidate
                    validated={validated}
                    onSubmit={onFormSubmit}
                >
                    <h3 className="">Login </h3>
                    {
                        error && <FormError errors={error} />
                    }
                    {
                        store.isAuthenticated && <Navigate to="/" />
                    }
                    <hr />
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" name="email" onChange={onInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={onInputChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default LoginForm;