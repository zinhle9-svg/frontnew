
import React, { useState, useEffect } from "react";

export default function ProductCard() {
 
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then(response => response.json())
      .then(data => {
        setProducts(data); // store backend array in state
      })
      .catch(error => console.error(error));
  }, []);

  // map backend products
  const listProducts = products.map(item => (
    <li key={item.id}>
      <h3>{item.name}</h3>
      <p>Price: R {item.price}</p>
      <p>Category: {item.category}</p>
      <p>{item.description}</p>
    </li>
  ));

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6 }}>
      <ul>{listProducts}</ul>
    </div>
  );
}
