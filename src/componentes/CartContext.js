import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    // Check if the product is already in the cart
    const index = cartItems.findIndex((item) => item.product.id === product.id);

    if (index !== -1) {
      // If the product is in the cart, update the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it
      setCartItems([...cartItems, { product, quantity }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, useCart };

