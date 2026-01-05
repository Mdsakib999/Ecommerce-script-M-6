// src/context/CartContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
const STORAGE_KEY = "cart";

/** safe load from localStorage */
const loadCart = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to load cart from localStorage", e);
    return [];
  }
};

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => loadCart());

  // persist cart whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cart]);

  /**
   * addToCart(product, qty = 1)
   * product: expects at least {_id, name, price, imageUrl, countInStock}
   */
  const addToCart = (product) => {
    if (!product || !product._id) return;

    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.productId === product._id);

      if (existingIndex >= 0) {
        // update existing item safely (cap by stock)
        return prev.map((item, idx) => {
          if (idx !== existingIndex) return item;
          const newQty = Math.min(item.qty + 1, product.countInStock ?? Infinity);
          return { ...item, qty: newQty, countInStock: product.countInStock ?? item.countInStock };
        });
      } else {
        // add new item
        const newItem = {
          productId: product._id,
          name: product.name,
          price: product.price,
          qty: 1,
          imageUrl: product.imageUrl,
          countInStock: product.countInStock ?? Infinity
        };
        return [...prev, newItem];
      }
    });
  };

  /**
   * updateQty(productId, qty)
   * qty <= 0 will remove the item
   */
  const updateQty = (productId, qty) => {
    const safeQty = Math.floor(qty);
    setCart((prev) => {
      if (safeQty <= 0) {
        return prev.filter((i) => i.productId !== productId);
      }
      return prev.map((item) => {
        if (item.productId !== productId) return item;
        const capped = Math.min(safeQty, item.countInStock ?? safeQty);
        return { ...item, qty: capped };
      });
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((i) => i.productId !== productId));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, updateQty, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// hook
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
