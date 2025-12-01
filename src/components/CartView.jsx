// src/components/CartView.jsx
import React from "react";
import { useCart } from "../contexts/CartContext";

export default function CartView() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    setQuantity,
    removeFromCart,
    getItemsCount,
    getTotalPrice,
    clearCart,
  } = useCart();

  if (!cart.length) return <div>Your cart is empty</div>;

  return (
    <div>
      <h2>Cart ({getItemsCount()} items)</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ marginBottom: 12 }}>
            <strong>{item.name}</strong> — R{item.price} × {item.quantity}
            <div style={{ marginTop: 6 }}>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => setQuantity(item.id, Number(e.target.value))}
                style={{ width: 60, margin: "0 8px" }}
                min="1"
              />
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: 8 }}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 12 }}>
        <strong>Total:</strong> R{getTotalPrice().toFixed(2)}
      </div>

      <div style={{ marginTop: 12 }}>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
}
