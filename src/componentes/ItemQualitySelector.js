import React, { useState } from 'react';

const ItemQuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  return (
    <div className="quantity-selector">
      <label htmlFor="quantity">Cantidad:</label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
      />
    </div>
  );
};

export default ItemQuantitySelector;
