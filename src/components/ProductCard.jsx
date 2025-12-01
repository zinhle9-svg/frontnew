// src/components/ProductCard.jsx
import React from "react";
import { useCart } from "../contexts/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, existsInCart } = useCart();

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6 }}>
      <h3>{product.name}</h3>
      <p>R {product.price}</p>
      <p>{product.category}</p>

      <button
        onClick={() => addToCart(product, 1)}
        style={{ padding: "8px 12px", marginTop: 8 }}
      >
        {existsInCart(product.id) ? "Add another" : "Add to cart"}
      </button>
    </div>
  );
}
