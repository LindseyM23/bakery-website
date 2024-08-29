
import React from 'react';
import'../styles/Orders.css';


const menuItems = {
  pastries: [
    { name: 'Chocolate Almond Croissant', 
      description: 'A flaky, buttery croissant filled with a rich almond cream and topped with toasted almond slivers.', 
      price: 'R50.00', 
      image: '/Assets/image9.png' },
    { name: 'Chocolate Eclair', 
      description: 'Light and airy pastry filled with a smooth, rich chocolate custard and topped with a glossy chocolate glaze. ', 
      price: 'R30.00', 
      image: '/Assets/image10.png' },
    { name: 'Fruit Danish', 
      description: ' A soft, buttery Danish pastry topped with a variety of fresh fruits and a touch of cream cheese. ', 
      price: 'R100.00', 
      image: '/Assets/image11.png' },
  ],
  cakes: [
    { name: 'Classic Vanilla Bean Cake ', 
      description: 'A moist and fluffy vanilla cake made with real vanilla beans and frosted with a creamy vanilla buttercream. .', 
      price: 'R350.00', 
      image: '/Assets/image12.png' },
    { name: 'Rich Chocolate Ganache Cake', 
      description: ' Decadent layers of rich chocolate cake covered in a velvety chocolate ganache. ',
       price: 'R400.00',
        image: '/Assets/image13.png'},
    { name: 'Red Velvet Cake', 
      description: 'A stunning cake with a deep red hue and a hint of cocoa, layered with tangy cream cheese frosting.', 
      price: 'R340.00', 
      image: '/Assets/image14.png' },
  ],
  cookies: [
    { name: 'Chocolate Chip Cookies', 
      description: 'Classic cookies packed with rich, gooey chocolate chips in every bite.', 
      price: 'R19.00', 
      image:'/Assets/image15.png' },
    { name: 'Oatmeal Raisin Cookies', 
      description: 'Soft and chewy cookies made with wholesome oats and plump, juicy raisins.', 
      price: 'R19.00',
      image: '/Assets/image16.png' },
    { name: 'Peanut Butter Cookies', 
      description: 'Rich and crumbly cookies with a deep peanut butter flavor, topped with a signature fork crisscross pattern.', 
      price: 'R19.00', 
      image: '/Assets/image17.png' },
  ],
  bread: [
    { name: 'Artisan Sourdough Bread', 
      description: 'A crusty, flavorful sourdough loaf with a tangy taste and chewy texture.', 
      price: 'R70.00', 
      image: '/Assets/image18.png' },
    { name: 'Classic French Baguette',
       description: 'A long, thin loaf with a crisp, golden crust and a soft, airy interior. ', 
       price: 'R60.00', 
       image: '/Assets/image19.png' },
    { name: 'Cinnamon Swirl Bread', 
      description: 'A sweet, soft bread with a generous swirl of cinnamon sugar running through it.', 
      price: 'R100.00', 
      image: '/Assets/image20.png'},
  ],
};





const Orders = () => (
  <div className="menu-page">
    <h1>Our Menu</h1>
    {Object.keys(menuItems).map((section) => (
      <div key={section} className="menu-section">
        <h3>{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
        <div className="menu-items">
          {menuItems[section].map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.name} className='menu-images' />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <button className="buy-button">Buy</button>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);


export default Orders;
