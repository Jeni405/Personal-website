import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Fontawesome.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ServiceDetails from './Components/ServiceDetails.jsx'
import Navbar from './Components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="servicedetails" element={<ServiceDetails />} />
        <Route path="/home" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
);
