// src/components/cart/CartSummary.tsx
"use client";

import { useMemo } from "react";
import { useCart } from "@/context/CartContext";

const CartSummary = () => {
  const { cartItems } = useCart();

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  if (cartItems.length === 0) return null;

  const discount = 60;
  const tax = 14;
  const total = subtotal > 0 ? subtotal - discount + tax : 0;

  return (
    <div className="w-full xl:w-[340px] shrink-0 sticky top-6 flex flex-col gap-4">
      {/* Coupon */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5">
        <p className="text-sm font-semibold text-slate-700 mb-3">Have a coupon?</p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add coupon"
            className="flex-1 border border-slate-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="cursor-pointer border border-blue-200 hover:bg-blue-50 text-blue-600 px-4 rounded-xl text-sm font-medium transition-colors">
            Apply
          </button>
        </div>
      </div>

      {/* Financial calculations */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5">
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-center justify-between text-slate-600">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-red-500">
            <span>Discount:</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-green-600">
            <span>Tax:</span>
            <span>+${tax.toFixed(2)}</span>
          </div>
          <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
            <span className="text-base font-semibold text-slate-800">Total:</span>
            <span className="text-2xl font-bold text-slate-900">${total.toFixed(2)}</span>
          </div>
        </div>

        <button className="cursor-pointer w-full mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors">
          Checkout
        </button>

        <div className="flex items-center justify-center gap-2 mt-5 flex-wrap">
          {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((method) => (
            <span key={method} className="px-2.5 py-1 bg-slate-100 rounded-md text-[11px] text-slate-500">
              {method}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartSummary;