import React, { useState } from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
    const[Toggle,showMenu]=useState(false);
  return (
    <div>
    <header className="header">
        <nav className='nav container'>
            <a href="index.html" className='nav_logo'><h1>Keerthika</h1></a>
            <div className={Toggle ? "nav_menu show-menu": "nav_menu"}>
                <ul className='nav_list grid'>
                    <li className='nav_item'>
                        <Link to="/" className='nav_link active_link'>
                            <i className='uil uil-estate nav_icon'></i>Home
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link to="/About"  className='nav_link'>
                            <i className='uil uil-user nav_icon'></i>About
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link to="/Skills" className='nav_link'>
                            <i className='uil uil-briefcase-alt nav_icon'></i>Skills
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link to="/Services" className='nav_link'>
                            <i className='uil uil-estate nav_icon'></i>Services
                        </Link>
                    </li>
                                        <li className='nav_item'>
                        <Link to="/Contact" className='nav_link'>
                            <i className='uil uil-message nav_icon'></i>Contact
                        </Link>
                    </li>
                </ul>
                <i class="uil uil-times nav_close" ></i>
            </div>
            <div className='nav_toggle' onClick={()=> showMenu(!Toggle)}>
            <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
    </div>
  )
}

export default Header