import { useState } from 'react';
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddStudentComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const insertStudent = (e) => {
        e.preventDefault();
        let data = { name, email, address };
        axios.post("http://localhost/fourthsemproject/api/",data).then((response)=>{
                alert("Data Was Inserted");
                setName("");
                setEmail("");
                setAddress("");
            })
            .catch((e)=>{
                console.log(e);
            })
    }
    return (
        <div>
            <h1>Add Students</h1>
            <Form onSubmit={insertStudent}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email}  type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={address}  type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddStudentComponent; 