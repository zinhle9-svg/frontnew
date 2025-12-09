import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function CartView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const cart = () => {
    if (products.length === 0) {
      return <p>No items found</p>;
    } else {
      return products.map(item => (
        <ProductCard key={item.id} product={item} />
      ));
    }
  };

  return (
    <div>
      {cart()}
    </div>
  );
}

export default CartView;
