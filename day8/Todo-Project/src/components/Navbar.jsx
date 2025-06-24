import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <Link to='/' className='Link'>Home</Link>
            <Link to='/about' className='Link'>About</Link>
            <Link to='/Skills' className='Link'>Skills</Link>
            <Link to='/todo' className='Link'>Todo</Link>
            <Link to='/contact' className='Link'>Contact</Link>
            <Link to='/signup' className='Link'>Signup</Link>
            <Link to='/login' className='Link'>Login</Link>
            <Link to='/hooks' className='Link'>Hooks</Link>
        </nav>
    </div>
  )
}

export default Navbar