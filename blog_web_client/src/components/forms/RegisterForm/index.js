import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { register } from "../../../services/auth";
import { Navigate } from "react-router-dom";
import Header from "../../Header";

const FormError = ({ errors }) => {

    return (
        <Alert variant="danger">
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
        </Alert>
    )
}

const RegisterForm = () => {
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState();
    const [formData, setFormData] = useState({});
    const [isCreated, setIsCreated] = useState(false);

    const onInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }


    const onFormSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            event.stopPropagation();
            console.log("form submit")
            register({ payload: formData })
                .then((response) => {
                    setIsCreated(true);
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
                    <h3 className="">Register </h3>
                    {
                        error && <FormError errors={error} />
                    }
                    {
                        isCreated && <Navigate to="/login" />
                    }
                    <hr />
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control required type="text" placeholder="Enter username" name="username" onChange={onInputChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" name="email" onChange={onInputChange} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridUsername">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" name="first_name" onChange={onInputChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridUsername">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter middle name" name="mid_name" onChange={onInputChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" name="last_name" onChange={onInputChange} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={onInputChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default RegisterForm;