
import React from 'react';
import '../styles/AboutUs.css'

function AboutUs() {
  return (
    <div>
     
      <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">A little About Us!</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">

      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#collection"/></svg> */}
        </div>
        <h3 class="fs-2 text-body-emphasis">Our Sweet Beginning</h3>
        <p>At Golden Crust Bakery, our story begins with a passion for baking that has been passed down through generations. Founded with a love for creating delicious and comforting treats, we take pride in using only the finest ingredients to craft our artisanal bread, pastries, and cakes. Every product we offer is a testament to our commitment to quality, freshness, and the art of baking. Our dedicated team works tirelessly to ensure that each bite is a delightful experience that brings joy to our customers.</p>
        </div>


      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle"/></svg> */}
        </div>
        <h3 class="fs-2 text-body-emphasis">A Place to Gather and Share </h3>
        <p>We believe that a bakery is more than just a place to buy bread and sweets—it's a space where memories are made and shared. From our cozy storefront to the friendly smiles of our staff, we strive to create an inviting atmosphere where every visit feels like coming home. Our bakery is a community hub where families gather, friends catch up, and new connections are forged over the joy of good food. We invite you to join us and be part of our story.</p>
        </div>


      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg> */}
        </div>
        <h3 class="fs-2 text-body-emphasis">Baking Dreams into Reality</h3>
        <p>As we look to the future, Golden Crust Bakery remains committed to innovation while staying true to our roots. We continuously explore new recipes, techniques, and flavors to keep our offerings exciting and fresh. Whether you're stopping by for your morning coffee and croissant or ordering a custom cake for a special occasion, our goal is to exceed your expectations and make every moment memorable. Thank you for choosing Golden Crust Bakery, where every treat is crafted with love and care.</p>
       
      </div>

      <img src="../Assets/image3.png" class="rounded float-start" alt="pastries" className='images' />
      <img src="../Assets/image5.png" class="rounded float-end" alt="pastries" className='images'/>
      <img src="../Assets/image4.png" class="rounded float-end" alt="pastries" className='images'/>
      <img src="../Assets/image8.png" class="rounded float-end" alt="pastries" className='images'/>



      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg> */}
        </div>
        <h3 class="fs-2 text-body-emphasis">Our Mission</h3>
        <p>At Golden Crust Bakery, our mission is to enrich lives through the simple joy of freshly baked goods. We are dedicated to crafting high-quality, delicious treats that bring warmth and happiness to our customers. Our commitment to using the finest ingredients and traditional baking techniques ensures that each product we create meets the highest standards of taste and freshness. We strive to be a place where every visit feels special, and where our passion for baking shines through in every bite.</p>
       
      </div>


      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg> */}
        </div>
        <h3 class="fs-2 text-body-emphasis">Our Values</h3>
        <p>Integrity, community, and creativity are the cornerstones of Golden Crust Bakery. We believe in operating with honesty and transparency, building trust with our customers through quality and consistency. Our bakery is a community-focused haven where we cherish local connections and support our neighborhood. We embrace creativity by continuously exploring new flavors and innovative baking techniques, while staying true to our classic roots. These values guide us in delivering not just exceptional baked goods, but also a delightful experience for everyone who walks through our doors.</p>
       
      </div>
    </div>
<h3>Give Us A Visit!</h3>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.085013131915!2d29.37640047628284!3d-23.8511147723031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec72740b6c9e017%3A0x74937a0a824f4f57!2sSeshego%20Plaza!5e0!3m2!1sen!2sza!4v1724889760414!5m2!1sen!2sza" width="600" height="150"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


  </div>
    </div>
  );
}

export default AboutUs;
