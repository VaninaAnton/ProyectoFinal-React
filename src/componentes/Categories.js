import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  
  const categories = [
    { id: '1', name: 'Valijas' },
    { id: '2', name: 'Bolsos y Mochilas' },
    { id: '3', name: 'Organizadores y Neceseres' },
    { id: '4', name: 'Accesorios' },
    
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
