import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { db } from './firebase';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = db.collection('products');

        
        if (id) {
          productsRef = productsRef.where('category', '==', id);
        }

        const snapshot = await productsRef.get();
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [id]); 

  const handleAddToCart = (product, quantity) => {
    console.log(`Agregado al carrito: ${quantity}x ${product.name}`);
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;