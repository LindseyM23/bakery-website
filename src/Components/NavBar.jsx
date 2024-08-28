
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
   <nav>
<nav class="navbar bg-body-tertiary fixed-top" className='navbar' >
  <div class="container-fluid">
    <a class="navbar-brand" className='brand-name' >GOLDEN CRUST</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">GOLDEN CRUST</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <Link to="/" className='link' > <img src="../Assets/home.png" alt="home" width={30} />  Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/about" className='link' > <img src="../Assets/profile.png" alt="home" width={30} /> About Us</Link>
          </li>
          <li class="nav-item">
          <Link to="/orders" className='link' > <img src="../Assets/menu.png" alt="home" width={30} /> Orders</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
</nav>
   </nav>
  );
}

export default NavBar;
