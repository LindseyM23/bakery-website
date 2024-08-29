
import React from 'react';
import '../styles/HomePage.css'

function HomePage() {
  return (
<div class="container text-center">
  <div class="row">
    <div class="col">
      <h3>"From Oven to Heart, the Perfect Start."</h3>
      <br />
      <strong>Welcome to Golden Crust Bakery!</strong>
      <br />
      <br />
      <p>
      At Golden Crust, we believe that every bite should be a delight. 
      <br />
      Whether you're craving freshly baked bread, a decadent pastry, or a custom cake, we have something special just for you. 
      <br />
      Our passion for baking is matched only by our love for bringing smiles to our customers' faces.
      Take a moment to explore our delicious offerings, and feel the warmth and love we put into every recipe. 
      <br />
      rom our family to yours, welcome to Golden Crust – where every treat is baked to perfection!
    </p>
    </div>


    <div class="col">
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../Assets/image.png" width={170} class=" w-100" alt="Pastries"/>
    </div>
    <div class="carousel-item">
     <img src="../Assets/image1.png" width={200} class=" w-100" alt="Pastries"/>
    </div>
    <div class="carousel-item">
    <img src="../Assets/image2.png" width={90} class=" w-100" alt="Pastries"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  </div>
</div>



  );
}

export default HomePage;
