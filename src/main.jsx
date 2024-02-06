import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Component/Navbar/Navbar'
import Hero from "./Component/Hero/Hero"
import SocialMedia from "./Component/SocialMedia/SocialMedia"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <SocialMedia />
  </React.StrictMode>,
)
