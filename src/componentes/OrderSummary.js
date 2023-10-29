import React from 'react';
import { useCart } from './CartContext';

const OrderSummary = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.product.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default OrderSummary;

