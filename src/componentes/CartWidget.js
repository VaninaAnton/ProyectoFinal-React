import React from 'react';

const CartWidget = ({ itemCount }) => {
  return (
    <div>
      🛒
      <i className="fas fa-shopping-cart"></i>
      {itemCount > 0 && (
        <span className="badge">{itemCount}</span>
      )}
    </div>
  );
};

export default CartWidget;


