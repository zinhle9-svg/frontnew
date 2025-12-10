import React from 'react'


export default function ProductCard({ products }) {
  if (!products || products.length === 0) {
    return <p>No items found</p>;
  }

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>R{item.price}</p>
        </div>
      ))}
    </div>
  );
}
