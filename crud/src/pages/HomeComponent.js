import { useEffect, useState } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';

function HomeComponent() {
    const [students, setStudents] = useState([]);

    const getData = () => {
        axios.get("http://localhost/fourthsemproject/api/").then((response) => {
            setStudents(response.data);
        }).catch((error) => { console.log(error) })
    }
    useEffect(() => {
        getData();
      
    }, []);

    const deleteData = (id) => {
        const params = { id: id };
        axios.delete("http://localhost/fourthsemproject/api/", { params }).then((response) => {
           getData();
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <h1>Students List</h1>
            <Table striped bordered hover style={{ textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th colspan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students && students.map((student, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.address}</td>
                            <td><Link to={`update-student/${student.id}`} class="btn btn-warning" >Edit</Link></td>
                            <td><button class="btn btn-danger" onClick={() => deleteData(student.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default HomeComponent;