import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Row({ id, name, email, phone, hobbies, addToList}) {

  const deleteUser = (id) => {
    console.log('deleting user', id)
    axios.delete(`/users/${id}`)
    .then(response => {
    console.log(response)
    })
  }

    const handleUpdate = (id) => {
        console.log('updating')
    }

  return (
    <>
        
        <tr>
            <td><input type="checkbox" id={id} name={id} value={id} onChange={() => addToList(id)} />    &nbsp;   </td>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{hobbies}</td>
            <td><button onClick={() => {deleteUser(id)}}>Delete</button></td>
            <Link to={`/update/${id}`}>
                <td><button onClick={() => {handleUpdate(id)}}>Edit</button></td>
            </Link>
          </tr>
    </>
  )
}

export default Row
