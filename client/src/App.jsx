import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar'
import Horarios from './components/Horarios';
import Home from './components/Home';
import Ingreso from './components/Ingreso';
import Dashboard from './components/Dashboard';

function App() {

  return (
    
    <div className=" font-[Poppins]  bg-black h-screen">
    
        <NavBar/>
      <Routes>
      
      
      <Route 
          path='/' 
          element={<Home/>} 
          />
      
      <Route 
          path='/horarios' 
          element={<Horarios/>} 
          />
      <Route 
          path='/ingreso' 
          element={<Ingreso/>} 
          />
      <Route 
          path='/dashboard' 
          element={<Dashboard/>} 
          />


      </Routes>
 
    </div>

  
  )
}

export default App