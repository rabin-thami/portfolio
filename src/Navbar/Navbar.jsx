import { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {

    const [showNavbar, setshowNavbar] = useState(false)

    const handelShowNavBar = () => {
        setshowNavbar(!showNavbar)
    }
    return( 
        <nav>
            <div className="nav-container">
                <div className='logo'>
                    <p>Rabin</p>
                </div>
                <div className='menu-icon'onClick={handelShowNavBar}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className={`nav-elements ${showNavbar && "active"}`} >
                    <ul>
                        <li><a href=''>Home</a></li>
                        <li><a href=''>Projects</a></li>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar