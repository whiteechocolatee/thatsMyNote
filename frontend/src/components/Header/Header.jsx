import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className='container-fluid'>
      <nav className="navbar navbar-expand-lg navbar-dark header-navigation shadow rounded ">
        <div className="container">
          <b className="navbar-brand">ShareNote</b>
          <button className="navbar-toggler" type="button"
                  data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false"
                  aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink aria-current="page" className="nav-link" to='/'>Главная</NavLink>
              </li>
              <li className="nav-item">
                <NavLink aria-current="page" className="nav-link" to='/create'>Создать заметку</NavLink>
              </li>
              <li className="nav-item">
                <NavLink aria-current="page" className="nav-link" to='/note/'>Заметки</NavLink>
              </li>
              <li className="nav-item">
                <NavLink aria-current="page" className="nav-link" to='/about'>О проекте</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header