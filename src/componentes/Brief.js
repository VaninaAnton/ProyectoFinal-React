import React from 'react';
import { useCart } from './CartContext';

const Brief = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="brief">
      <h2>Resumen de la Compra</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.product.name} - Cantidad: {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total de Artículos: {totalItems}</p>
    </div>
  );
};

export default Brief;
