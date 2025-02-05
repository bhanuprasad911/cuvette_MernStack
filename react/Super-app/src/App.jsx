import React from 'react'
// import poster from './assets/poster.png'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup.jsx'
import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
