
import React from 'react';


const menuItems = {
  pastries: [
    { name: 'Chocolate Almond Croissant', description: 'A flaky, buttery croissant filled with a rich almond cream and topped with toasted almond slivers. The perfect blend of sweetness and nuttiness in every bite.', price: 'R50.00', image: <img src="../Assets/image9" alt="pastries" /> },
    { name: 'Chocolate Eclair', description: 'Light and airy pastry filled with a smooth, rich chocolate custard and topped with a glossy chocolate glaze. Ideal for those who crave a sweet and indulgent treat.', price: 'R30.00', image: <img src="../Assets/image10" alt="pastries"/> },
    { name: 'Fruit Danish', description: ' A soft, buttery Danish pastry topped with a variety of fresh fruits and a touch of cream cheese. A delightful combination of tangy and sweet flavors that’s perfect for breakfast or an afternoon snack.', price: 'R100.00', image: <img src="../Assets/image11" alt="pastries"/> },
  ],
  cakes: [
    { name: 'Classic Vanilla Bean Cake ', description: 'A moist and fluffy vanilla cake made with real vanilla beans and frosted with a creamy vanilla buttercream. Simple yet elegant, this cake is a timeless favorite for any occasion.', price: 'R350.00', image: butterCroissant },
    { name: 'Rich Chocolate Ganache Cake', description: ' Decadent layers of rich chocolate cake covered in a velvety chocolate ganache. This cake is a chocolate lover’s dream, perfect for celebrations or a special treat.', price: 'R400.00', image: chocolateCroissant },
    { name: 'Red Velvet Cake', description: 'A stunning cake with a deep red hue and a hint of cocoa, layered with tangy cream cheese frosting. It’s both visually striking and deliciously moist, making it a favorite for special events.', price: 'R340.00', image: chocCroissant },
  ],
  cookies: [
    { name: 'Chocolate Chip Cookies', description: 'Classic cookies packed with rich, gooey chocolate chips in every bite. Crispy on the edges and chewy in the center, these cookies are a timeless favorite for all ages.', price: 'R19.00', image: <img src="../Assets/image15" alt="pastries"/> },
    { name: 'Oatmeal Raisin Cookies', description: 'Soft and chewy cookies made with wholesome oats and plump, juicy raisins. With a hint of cinnamon and a touch of sweetness, these cookies are a comforting and satisfying treat.', price: 'R19.00',image: <img src="../Assets/image16" alt="pastries"/> },
    { name: 'Peanut Butter Cookies', description: 'Rich and crumbly cookies with a deep peanut butter flavor, topped with a signature fork crisscross pattern. Perfectly balanced between sweet and salty, these cookies are a must for peanut butter lovers.', price: 'R19.00', image: <img src="../Assets/image17" alt="pastries"/> },
  ],
  bread: [
    { name: 'Artisan Sourdough Bread', description: 'A crusty, flavorful sourdough loaf with a tangy taste and chewy texture. Made with a natural starter, this bread is perfect for sandwiches or as an accompaniment to soups.', price: 'R70.00', image: <img src="../Assets/image18" alt="pastries"/> },
    { name: 'Classic French Baguette', description: 'A long, thin loaf with a crisp, golden crust and a soft, airy interior. Ideal for enjoying with cheese, pâté, or as a side to any meal.', price: 'R60.00', image: <img src="../Assets/image19" alt="pastries"/> },
    { name: 'Cinnamon Swirl Bread', description: 'A sweet, soft bread with a generous swirl of cinnamon sugar running through it. Perfect for breakfast or a comforting afternoon snack, toasted with a pat of butter.', price: 'R100.00', image: <img src="../Assets/image20" alt="pastries"/>},
  ],
};





const MenuPage = () => (
  <div className="menu-page">
    <h1>Our Menu</h1>
    {Object.keys(menuItems).map((section) => (
      <div key={section} className="menu-section">
        <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
        <div className="menu-items">
          {menuItems[section].map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <button className="buy-button">Buy</button>
            </div>
          ))}
        </div>
      </div>
    ))}
    <div className="more-items">
      <p>We will be adding more items to our menu soon. Be on the lookout!</p>
      <p>Thank you for visiting Hlogi's Confectioneries.</p>
    </div>
  </div>
);

// function Orders() {
//   return (
//    <>
//    <h1>Choose from our Delectable Pastry Items</h1>
//    <br />
//       <h2>Pastries</h2>
      



// </>


export default Orders;
