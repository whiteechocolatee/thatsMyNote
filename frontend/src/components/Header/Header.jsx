import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className='container-fluid'>
      <nav className='header-navigation'>
        <ul className='container header-navigation_btn'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/create'>Create</Link>
          </li>
          <li>
            <Link to='/note/'>Note</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header