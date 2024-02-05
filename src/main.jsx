import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar/Navbar'
import Hero from "./Hero/Hero"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
  </React.StrictMode>,
)
