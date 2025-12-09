import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function CartView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/userprod")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
}

export default CartView;
