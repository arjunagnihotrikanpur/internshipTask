import React, { useState } from 'react'
import './Modal.css'

import axios from 'axios';

function Modal({ showForm, setShowForm }) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [hobbies, setHobbies] = useState("")

  const handleClose = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  }

  const handleAdd = async (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      phone: phone,
      hobbies: hobbies
    }
    axios.post('/users/', user)
        .then(response => {
          console.log(response.data)
          alert('user added')
          setShowForm(!showForm);
        });
  }

  return (
    <div className='modal modalBackground'>
      <div className='modalContainer'>
        
        <h1>Form</h1>
        {/* <button onClick={setShowForm(!showForm)}>Close Form</button> */}
        <form>
        
          <h3>Name: </h3>
          <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

          <h3>E-Mail: </h3>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <h3>Mobile: </h3>
          <input type="number" name="mobile" id="mobile" value={phone} onChange={(e) => setPhone(e.target.value)} />

          <h3>Hobbies: </h3>
          <input type="text" name="hobbies" id="hobbies" value={hobbies} onChange={(e) => setHobbies(e.target.value)} />

          <button onClick={handleClose}>X</button>
          <button onClick={handleAdd}>Add</button>
        </form>

      </div>
    </div>
  )
}

export default Modal
