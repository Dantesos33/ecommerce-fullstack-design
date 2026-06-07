// src/context/CartContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { type Product } from "@/data/listing-data";

export interface CartItem extends Product {
  quantity: number;
  size?: string;
  color?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  savedItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  saveForLater: (id: number) => void;
  moveToCart: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [savedItems, setSavedItems] = useState<CartItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("local_cart");
      if (savedCart) setCartItems(JSON.parse(savedCart));

      const savedForLater = localStorage.getItem("local_saved");
      if (savedForLater) setSavedItems(JSON.parse(savedForLater));
    } catch (e) {
      console.error("Failed to parse stored data", e);
    }
  }, []);

  // Persist cart
  useEffect(() => {
    localStorage.setItem("local_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Persist saved items
  useEffect(() => {
    localStorage.setItem("local_saved", JSON.stringify(savedItems));
  }, [savedItems]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const clearCart = () => setCartItems([]);

  /** Move an item from the cart into the saved-for-later list */
  const saveForLater = (id: number) => {
    setCartItems((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) {
        setSavedItems((s) =>
          s.find((i) => i.id === id) ? s : [...s, { ...item, quantity: 1 }],
        );
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  /** Move an item from saved-for-later back into the cart */
  const moveToCart = (id: number) => {
    setSavedItems((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) {
        setCartItems((c) =>
          c.find((i) => i.id === id)
            ? c.map((i) =>
                i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
              )
            : [...c, { ...item, quantity: 1 }],
        );
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  /** Remove an item from the saved-for-later list entirely */
  const removeFromSaved = (id: number) => {
    setSavedItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        savedItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        saveForLater,
        moveToCart,
        removeFromSaved,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
