import React from 'react'
import ProductCard from './pages/ProductCard'
import CartView from './pages/CartView'
import { useState, useEffect } from 'react';


function App() {
   const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:4000/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
  return (
    <div>
      <ProductCard products={products}/>
      <CartView />
    
    </div>
  )
}

export default App
