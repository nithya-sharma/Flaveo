import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState([]);

  const addToCart = (dish) => {
    setcartItems(prevCart => [...prevCart, dish]);
  };

  const removeFromCart = (dishId) => {
    setCart(prevCart => prevCart.filter(dish => dish.id !== dishId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;