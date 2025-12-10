import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductView() {
  const { id } = useParams();
 

  // find the selected product
  const product = products.find(item => item.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: R{product.price}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}
