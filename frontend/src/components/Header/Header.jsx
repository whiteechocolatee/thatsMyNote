import React from 'react'
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
      <nav>
        <ul>
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
          <li>
            <Link to='toTheErrorPage'>Lets see errors</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header