import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from './firebase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = db.collection('products').doc(id);
        const doc = await productRef.get();
        if (doc.exists) {
          setProduct({ id: doc.id, ...doc.data() });
        } else {
          console.error('Product not found.');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ItemDetailContainer;
