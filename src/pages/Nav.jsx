import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from  '../components/auth/Login'
import Signup from '../components/auth/Signup'


function Nav() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/signup' element={<Signup />} />
            
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default Nav