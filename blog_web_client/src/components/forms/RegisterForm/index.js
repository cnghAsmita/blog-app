import { useState } from "react";


const RegisterForm = () =>{
    const [formData, setFormData] = useState({});

    const onInputChange = (event) =>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    console.log("formdata", formData)


    return (
        <div className="form-container">
            <label>Username: </label>
            <input name="username" onChange={onInputChange}/>
            <br />
            <label>Email: </label>
            <input name="email" onChange={onInputChange}/>
            <br />
            <label>First Name </label>
            <input name="first_name" onChange={onInputChange}/>
            <label>Middle Name </label>
            <input name="mid_name" onChange={onInputChange}/>
            <label>Last Name </label>
            <input name="last_name" onChange={onInputChange}/>
        </div>
    );
}

export default RegisterForm;