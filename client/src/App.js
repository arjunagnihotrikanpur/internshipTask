import './App.css';
import Table from './components/Table'
import Modal from "./components/Modal"
import { useState } from 'react';
import Home from './components/Home'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UpdateScreen from './components/UpdateScreen';

function App() {

  

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/update/:id' element={<UpdateScreen />}></Route>
        </Routes>
      </div>
    </Router>
  )
};

export default App;
