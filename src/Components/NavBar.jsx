
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/">🏠 Home</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/about">ℹ️ About Us</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/orders">🛒 Orders</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
