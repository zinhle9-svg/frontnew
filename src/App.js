// src/App.jsx
import React from "react";
import { CartProvider } from "./contexts/CartContext";
import ProductCard from "./components/ProductCard";
import CartView from "./components/CartView";


export default function App() {
  return (
    <CartProvider>
      <div style={{ display: "flex", gap: 24 }}>
        <div>
          <h1>Products</h1>
          {sampleProducts.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        <div>
          <h1>Your Cart</h1>
          <CartView />
        </div>
      </div>
    </CartProvider>
  );
}
