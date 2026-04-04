import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar' >
      <div className='nav-container'>
          {/* Logo*/}
          <div className="nav-logo">
              <span>TheMomoSpot</span>
          </div>
        {/* Navigation Links */}
        <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">Offers</a>
            <a href="#">about</a>
        </nav>
        {/*CTA */}
        <button className="nav-btn">Login</button>
    </div>
   </div> 
  )
}

export default Navbar