import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from 'react-router';

function UpdateComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const { id } = useParams();

    const getUser = () => {
        axios.get(`http://localhost/fourthsemproject/api/?id=${id}`).then((response) => {
            let user = response.data;
            setName(user.name);
            setEmail(user.email);
            setAddress(user.address);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getUser();
    }, [])

    const updateStudent = (e) => {
        e.preventDefault();
        let data = { id, name, email, address };
        axios.put("http://localhost/fourthsemproject/api/", data).then((response) => {
            alert("Data Was Updated");
            setName("");
            setEmail("");
            setAddress("");
        })
            .catch((e) => {
                console.log(e);
            })
    }
    return (
        <div>
            <h1>Update Students</h1>
            <Form onSubmit={updateStudent}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={address} type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UpdateComponent; 