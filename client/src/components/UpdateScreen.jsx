import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
function UpdateScreen() {

    const navigate = useNavigate();
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [hobbies, setHobbies] = useState("")

    const { id } = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`/users/${id}`)
    .then(response => {
    setUser(response.data)
    })
    }, [])

    useEffect(() => {
        setName(user.name)
    setEmail(user.email)
    setPhone(user.phone)
    setHobbies(user.hobbies)
    },[user])


    const handleUpdateBtn = (e) => {
        e.preventDefault();
        const user = {
            name: name,
            email: email,
            phone: phone,
            hobbies: hobbies,
        }
        axios.patch(`/users/${id}`, user)
        .then(response => {
          console.log(response.data)
          alert('user changed')
          navigate('/')
        });
    }


  return (
      <div>
        <div className='modal'>
      <div className=''>
        
        <h1>Form</h1>
        {/* <button onClick={setShowForm(!showForm)}>Close Form</button> */}
        <form>

        <p>id: {id}</p>
        <p>(id cannot be edited)</p>

          <h3>Name: </h3>
          <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

          <h3>E-Mail: </h3>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <h3>Mobile: </h3>
          <input type="number" name="mobile" id="mobile" value={phone} onChange={(e) => setPhone(e.target.value)} />

          <h3>Hobbies: </h3>
          <input type="text" name="hobbies" id="hobbies" value={hobbies} onChange={(e) => setHobbies(e.target.value)} />

          <br />
          <button onClick={handleUpdateBtn}>Update</button>
        </form>

      </div>
    </div>
    </div>
  )
}

export default UpdateScreen
