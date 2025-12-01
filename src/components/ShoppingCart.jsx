// src/contexts/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * Cart shape:
 * [
 *   { id, name, price, category, description, quantity }
 * ]
 */

// ---- Helper: load/save cart to localStorage (optional) ----
const STORAGE_KEY = "myapp_cart";
function loadCart() {
  try {
    const json = localStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  } catch {
    return [];
  }
}
function saveCart(cart) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch {}
}

// ---- Context & Provider ----
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => loadCart());

  // persist cart
  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  // Check if item exists by id
  const existsInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  // Add product: if exists increment quantity, else add with quantity = 1
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const index = prev.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        // copy array and update quantity
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          quantity: (updated[index].quantity || 0) + qty,
        };
        return updated;
      } else {
        return [...prev, { ...product, quantity: qty }];
      }
    });
  };

  // Increase quantity by 1 (convenience)
  const increaseQuantity = (productId, amount = 1) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: (item.quantity || 0) + amount }
          : item
      )
    );
  };

  // Decrease quantity (and remove if <= 0)
  const decreaseQuantity = (productId, amount = 1) => {
    setCart((prev) => {
      const updated = prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: (item.quantity || 0) - amount }
            : item
        )
        .filter((item) => (item.quantity || 0) > 0);
      return updated;
    });
  };

  // Set exact quantity (if quantity 0 => remove)
  const setQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) => prev.map((item) => (item.id === productId ? { ...item, quantity } : item)));
  };

  // Remove item entirely
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Clear cart
  const clearCart = () => setCart([]);

  // Totals
  const getItemsCount = () => cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const getTotalPrice = () => cart.reduce((sum, item) => sum + (item.price * (item.quantity || 0)), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        existsInCart,
        increaseQuantity,
        decreaseQuantity,
        setQuantity,
        removeFromCart,
        clearCart,
        getItemsCount,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook to use the cart
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
