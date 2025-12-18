import  React, {  useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProductCard from "./pages/ProductCard";
import CartView from "./pages/CartView";
import Home from "./pages/Home";
import "./css/index.css";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setProducts(data))
  }, []);
 const [cart, setCart] = useState([]);
  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        //update quantity
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // add new item
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  if (!products || products.length === 0) {
    return <p>No items found</p>;
  }

  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={ <ProductCard products={products} /> }/>
          <Route path="/cartview" element={<CartView  cart={cart}/>} />
         <Route></Route>
        </Routes>
 
  );
}

export default App;
