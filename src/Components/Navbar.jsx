import React from 'react'
import { Link } from 'react-router-dom'
import ToDo from '../assets/ToDo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" id="nav-id">
          <a className="navbar-brand" href="#">
            <img src={ToDo} alt="ToDo" id="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" id="list-name">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/createTask" id="list-name">
                  Add New Task
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" id="list-name">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
