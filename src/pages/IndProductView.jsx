import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function ProductView() {
  const { id } = useParams();
  const location = useLocation();

  // products passed from ProductCard
  const products = location.state?.products || [];

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
