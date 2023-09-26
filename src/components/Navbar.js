import React from 'react'
import { NavLink } from 'react-router-dom' 
const Navbar = () => {
  return (
    <nav className="bg-light navbar navbar-expand-lg shadow-sm p-4">
      <div className="container-fluid flex-column d-sm-flex  flex-lg-row  justify-content-lg-between justify-content-center">
        
        <div className="navbar-brand mb-4 mb-md-0 mb-lg-0">
          <span className="ms-2 fw-bold">mac-codes</span>
        </div>
        
        <div className="">
          <NavLink to='/' className="link me-5">Home</NavLink>
          <NavLink to='/about' className="link me-5">About Me</NavLink>
          <NavLink to='/projects' className="link">Portfolio</NavLink>
        </div>
      </div>
  </nav>
  )
}

export default Navbar