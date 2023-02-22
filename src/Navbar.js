import './App.css';
import React from 'react'
import logo from '../src/img/logo.png';

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <img className='logo-img' src={logo} alt="This is a logo" />
            <p>HooBank</p>
        </div>
        
        <div>
            <ul className='menu'>
                <li>Home</li>
                <li>About Us</li>
                <li>Features</li>
                <li>Solution</li>
            </ul>
        </div>
        
    </nav>
  )
}

export default Navbar