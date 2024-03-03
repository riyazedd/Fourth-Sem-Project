import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddStudentComponent() {
    return (
        <div>
            <h1>Add Students</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    )
}

export default AddStudentComponent; 