// src/components/cart/CartHeader.tsx
"use client";

import { useCart } from "@/context/CartContext";

const CartHeader = () => {
  const { cartItems, clearCart } = useCart();

  return (
    <div className="flex items-center justify-between mb-5">
      <h1 className="text-xl md:text-2xl font-bold text-slate-800">
        My cart ({cartItems.length})
      </h1>
      {cartItems.length > 0 && (
        <button
          onClick={clearCart}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
        >
          Remove all
        </button>
      )}
    </div>
  );
};

export default CartHeader;