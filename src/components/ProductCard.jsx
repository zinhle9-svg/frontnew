// src/components/ProductCard.jsx
import React from "react";
import { useState } from "react";
import { Products } from "./ProductListing";

export default function ProductCard({ product }) {
  const { addToCart, existsInCart } = useState();

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6 }}>
      <h3>{Products.name}</h3>
      <p>R {Products.price}</p>
      <p>{Products.category}</p>
      <p>{Products.image}</p>
      <p>{Products.description}</p>
      <button
        onClick={() => addToCart(Products, 1)}
        style={{ padding: "8px 12px", marginTop: 8 }}
      >
        {existsInCart(Products.id) ? "Add another" : "Add to cart"}
      </button>
    </div>
  );
}
