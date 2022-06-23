import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className='container-fluid'>
      <nav className='header-navigation'>
        <ul className='container header-navigation_btn'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/create'>Create</NavLink>
          </li>
          <li>
            <NavLink to='/note/'>Note</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header