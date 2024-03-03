import { useEffect, useState } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function HomeComponent(){
    const [students, setStudents]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost/fourthsemproject/api/").then((response)=>{setStudents(response.data);
    }).catch((error)=>{console.log(error)})
    },[]);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>SN</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
            {students && students.map((student, index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.address}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}

export default HomeComponent;