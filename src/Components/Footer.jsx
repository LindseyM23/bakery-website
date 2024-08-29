
import React from 'react';
import '../styles/Footer.css'

function Footer() {
  return (
<div class="container1">
<div class="container1">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <img src="../Assets/pastry-bag.png" alt="logo" width={50} />
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2024 Golden Crust</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className='socials' class="ms-3" > <img src="../Assets/twitter .png" alt="twitter" width={30} /> </li>
      <li className='socials' class="ms-3" > <img src="../Assets/instagram (1).png" alt="instagram" width={30} /> </li>
      <li className='socials' class="ms-3" > <img src="../Assets/facebook (1).png" alt="twitter" width={30} /> </li>
      
    </ul>
  </footer>
</div>
</div>
    
  
  );
}

export default Footer;
