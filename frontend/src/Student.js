import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Student() {
    const [student, setStudent] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => {
                const data = Array.isArray(res.data) ? res.data : [res.data];
                setStudent(data);
            })
            .catch(err => console.log(err));
    }, []);    

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-succcess'>Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Housepoints</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((data, i)=> (
                            <tr key={i}>
                                <td>{data.Name}</td>
                                <td>{data.Email}</td>
                                <td>{data.Houspoints}</td>
                                <td>
                                    <Link to={`update/${data.id}`} className='btn btn-primary'>Update</Link>
                                    <buton className='btn btn-danger ms-2'>Delete</buton>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Student