import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductView() {
  const { id } = useParams();
 

  // find the selected product
  const products = products.find(item => item.id === id);

  if (!products) return <p>Product not found</p>;

  return (
    <div>
      <h2>{products.name}</h2>
      <p>Price: R{products.price}</p>
      <p>Category: {products.category}</p>
      <p>Description: {products.description}</p>
    </div>
  );
}
