import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from "./pages/ProductCard";
import CartView from "./pages/CartView";
import Home from "./pages/Home";

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

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product"
            element={
              <ProductCard products={products} />
            }
          />
          <Route path="/cartView" element={<CartView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
