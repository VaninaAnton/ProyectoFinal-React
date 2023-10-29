import React from 'react';
import Description from './Description';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <Description description={product.description} />
      <ItemQuantitySelector product={product} />
      <AddItemButton product={product} />
    </div>
  );
};

export default ItemDetail;
