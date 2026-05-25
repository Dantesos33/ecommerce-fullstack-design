// src/components/cart/CartItemList.tsx
"use client";

import Link from "next/link";
import { FaTrash, FaHeart, FaArrowLeft } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

const CartItemList = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6 text-center bg-white border border-slate-200 rounded-2xl">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty cart"
          className="w-28 h-28 object-contain opacity-70"
        />
        <h2 className="text-lg font-semibold text-slate-700 mt-5">Your cart is empty</h2>
        <p className="text-sm text-slate-500 mt-2 max-w-md">
          Looks like you haven&apos;t added anything yet. Start shopping to fill your cart.
        </p>
        <Link
          href="/products"
          className="mt-5 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-3 rounded-xl transition-colors"
        >
          <FaArrowLeft size={12} />
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="divide-y divide-slate-100 bg-white border border-slate-200 rounded-2xl overflow-hidden">
      {cartItems.map((item) => (
        <div key={item.id} className="flex flex-col md:flex-row gap-4 p-5">
          <Link href={`/products/${item.id}`} className="w-[110px] h-[110px] shrink-0 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center">
            <img src={item.image} alt={item.title} className="w-[80px] h-[80px] object-contain" />
          </Link>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
              <div className="min-w-0">
                <Link href={`/products/${item.id}`} className="text-sm md:text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </Link>
                <div className="mt-2 flex flex-col gap-1 text-xs text-slate-500">
                  {item.size && <p>Size: <span className="text-slate-700">{item.size}</span></p>}
                  {item.color && <p>Color: <span className="text-slate-700">{item.color}</span></p>}
                  <p>Seller: <span className="text-slate-700">Best Factory LLC</span></p>
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <button onClick={() => removeFromCart(item.id)} className="cursor-pointer inline-flex items-center gap-1.5 text-xs text-red-500 hover:text-red-600 font-medium">
                    <FaTrash size={11} /> Remove
                  </button>
                  <button className="cursor-pointer inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-medium">
                    <FaHeart size={11} /> Save for later
                  </button>
                </div>
              </div>

              <div className="flex lg:flex-col items-start lg:items-end justify-between gap-4 lg:min-w-[120px]">
                <div className="text-left lg:text-right">
                  <p className="text-lg font-bold text-slate-800">${(item.price * item.quantity).toFixed(2)}</p>
                  {item.originalPrice && (
                    <p className="text-xs text-slate-400 line-through">${(item.originalPrice * item.quantity).toFixed(2)}</p>
                  )}
                </div>

                <select
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  className="cursor-pointer border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[1, 2, 3, 4, 5, 6].map((qty) => (
                    <option key={qty} value={qty}>Qty: {qty}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;