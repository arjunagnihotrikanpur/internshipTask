import React, { useState, useEffect } from 'react'
import './Table.css'

import axios from 'axios';

import Row from './Row'

function Table({addToList}) {

  const [showForm, setShowForm] = useState(false)

  const handleUpdate = (id) => {
    setShowForm(!showForm)
}


  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`/users`)
  .then(response => {
  setUsers(response.data)
  })
  }, [users])

  


  return (
    <div>
      <table className='styled-table"'>
        <thead>
          <tr>
            <th>SELECT</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Hobbies</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Row 
            key={user._id} id={user._id} name={user.name} email={user.email} phone={user.phone} hobbies={user.hobbies} addToList={addToList} />
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default Table
