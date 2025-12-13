import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function CartView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000//api/products/:id")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
function CartView({ cart, setCart }) {
  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Qty: {item.quantity}</p>
          <p>Price: R{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CartView;

  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
}

export default CartView;
