import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
      />
      <button onClick={() => onAddToCart(product, quantity)}>Agregar al carrito</button>
      <Link to={`/item/${product.id}`}>Ver detalles</Link>
    </div>
  );

export default ProductCard;
