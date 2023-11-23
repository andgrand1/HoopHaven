import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the server
    const fetchCartItems = async () => {
      try {
        const response = await fetch('<ourserversendpoint>', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            
          },
        });

        if (response.ok) {
          const result = await response.json();
          setCartItems(result.data); 
        } else {
          console.error('Failed to fetch cart items');
        }
      } catch (error) {
        console.error('Error during cart items fetch:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

