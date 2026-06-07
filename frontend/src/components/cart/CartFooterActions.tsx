// src/components/cart/CartFooterActions.tsx
"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

const CartFooterActions = () => {
  const { cartItems } = useCart();
  if (cartItems.length === 0) return null;

  return (
    <div className="mt-4">
      <Link
        href="/products"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-3 rounded-xl transition-colors"
      >
        <FaArrowLeft size={12} />
        Back to shop
      </Link>
    </div>
  );
};

export default CartFooterActions;