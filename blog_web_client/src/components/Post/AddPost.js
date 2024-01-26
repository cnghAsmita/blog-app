import { Alert, Button, Form } from "react-bootstrap";
import Header from "../Header";
import { useContext, useState } from "react";
import { AppContext } from "../../context";
import { Navigate } from "react-router-dom";
import { addPost } from "../../services/post";


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

const AddPost = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState();


  const { store, setStore } = useContext(AppContext);

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
      addPost({payload: formData, token: store.access})
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
      <Form noValidate
        validated={validated}
        onSubmit={onFormSubmit}
      >
        <h3 className="">Add New Post </h3>
        {
          error && <FormError errors={error} />
        }
        {
          !store.isAuthenticated && <Navigate to="/" />
        }
        <hr />
        <Form.Group controlId="formGridTitle">
          <Form.Label>Post title</Form.Label>
          <Form.Control required type="text" placeholder="Enter post title" name="title" onChange={onInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control required as="textarea" rows={4} placeholder="Enter post description" name="description" onChange={onInputChange} />
        </Form.Group>
        <Button variant="primary" type="submit" size='sm'>
          Add Post
        </Button>
      </Form>
    </>
  )
}
export default AddPost;