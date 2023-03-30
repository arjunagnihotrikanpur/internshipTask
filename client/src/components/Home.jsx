import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Modal from './Modal'
import Table from './Table'
import './Home.css'
import emailjs from '@emailjs/browser';
import axios from "axios"
function Home() {

  const [users, setUsers] = useState([])

  const list = []

  const sendEmail = async (e) => {

    if(list.length == 0) {
      alert("NO ITEMS IN LIST")
      return null;
    }

    const checkPresence = (user) => {
      if (list.includes(user._id)) {
        return true
      } else {
        return false
      }
    }

    e.preventDefault();
    
    axios.get(`/users`)
      .then(response => {
        setUsers(response.data)
        const newUsers = response.data.filter(checkPresence)
        console.log(newUsers)
        axios.post('/sendEmail', {users: JSON.stringify(newUsers)})
        .then(response => {
          console.log(response.data)
        });
      })

      

    
    
    
  };

    const [showForm, setShowForm] = useState(false)

  const handleClick = () => {
    setShowForm(!showForm)
  }

  const addToList = (id) => {
    if(list.includes(id)) {
      const index = list.indexOf(5);
      list.splice(index, 1);
    } else {
      list.push(id)
    }
  }

 


  return (
    <div>
      <Table addToList={addToList} />
        {showForm && <Modal setShowForm={setShowForm} showForm={showForm} />}

        <div className='btnBox'>
          <button className='showFormBtn' onClick={sendEmail}>Send</button>
          <button className='showFormBtn' onClick={handleClick}>Add</button>
        </div>
    </div>
  )
}

export default Home
