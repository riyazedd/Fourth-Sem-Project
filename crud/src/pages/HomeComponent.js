import { useEffect, useState } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function HomeComponent(){
    const [students, setStudents]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost/fourthsemproject/api/").then((response)=>{setStudents(response.data);
    }).catch((error)=>{console.log(error)})
    },[]);

    const deleteData=(id)=>{
        data={
            id:id
        }
        axios.delete("http://localhost/fourthsemproject/api/",data).then((response)=>{
            alert("Data Deleted");
        })
    }

    return (
        <div>
            <h1>Students List</h1>
        <Table striped bordered hover>
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
            {students && students.map((student, index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.address}</td>
                    <td><button class="btn btn-warning" >Edit</button></td>
                    <td><button class="btn btn-danger" onClick={()=>deleteData(student.id)}>Delete</button></td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
    )
}

export default HomeComponent;