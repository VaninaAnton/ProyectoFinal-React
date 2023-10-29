import React from 'react';

const AddItemButton = () => {
  const handleAddToCart = () => {
    
    console.log('Product added to cart.');
  };

  return (
    <button onClick={handleAddToCart}>Agregar al carrito</button>
  );
};

export default AddItemButton;
