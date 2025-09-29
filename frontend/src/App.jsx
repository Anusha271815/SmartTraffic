import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard.jsx'
import Report from './pages/Report.jsx'
import HomePage from './pages/home.jsx'
import AboutPage from './pages/About.jsx'
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import UserPage from './pages/User.jsx'  

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Report" element={<Report/>}/>
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/User" element={<UserPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
