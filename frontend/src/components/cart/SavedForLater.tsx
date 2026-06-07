// src/components/cart/SavedForLater.tsx
"use client";

import Link from "next/link";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

const SavedForLater = () => {
  const { savedItems, moveToCart, removeFromSaved } = useCart();

  if (savedItems.length === 0) return null;

  return (
    <section className="mt-8">
      {/* Section heading */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-slate-800">
          Saved for later{" "}
          <span className="ml-1 text-sm font-medium text-slate-400">
            ({savedItems.length} {savedItems.length === 1 ? "item" : "items"})
          </span>
        </h2>
      </div>

      {/* ── Mobile: vertical list ── Desktop: horizontal card grid ── */}

      {/* Mobile list (hidden on md+) */}
      <div className="flex flex-col divide-y divide-slate-100 bg-white border border-slate-200 rounded-2xl overflow-hidden md:hidden">
        {savedItems.map((item) => (
          <div key={item.id} className="flex items-start gap-4 p-4">
            {/* Thumbnail */}
            <Link
              href={`/products/${item.id}`}
              className="w-[80px] h-[80px] shrink-0 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[60px] h-[60px] object-contain"
              />
            </Link>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <Link
                href={`/products/${item.id}`}
                className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors line-clamp-2"
              >
                {item.title}
              </Link>
              <p className="text-base font-bold text-slate-900 mt-1">
                ${item.price.toFixed(2)}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => moveToCart(item.id)}
                  className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 border border-blue-200 hover:bg-blue-50 rounded-lg px-3 py-1.5 transition-colors"
                >
                  <FaShoppingCart size={11} />
                  Move to cart
                </button>
                <button
                  onClick={() => removeFromSaved(item.id)}
                  className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-medium text-red-500 border border-red-100 hover:bg-red-50 rounded-lg px-3 py-1.5 transition-colors"
                >
                  <FaTrash size={11} />
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop grid (hidden below md) */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {savedItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col gap-3 hover:shadow-md transition-shadow"
          >
            {/* Thumbnail */}
            <Link
              href={`/products/${item.id}`}
              className="w-full aspect-square bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[80%] h-[80%] object-contain"
              />
            </Link>

            {/* Info */}
            <div className="flex-1 flex flex-col gap-1">
              <Link
                href={`/products/${item.id}`}
                className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors line-clamp-2 leading-tight"
              >
                {item.title}
              </Link>
              <p className="text-sm font-bold text-slate-900">
                ${item.price.toFixed(2)}
              </p>
            </div>

            {/* Move to cart CTA */}
            <button
              onClick={() => moveToCart(item.id)}
              className="cursor-pointer w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-blue-600 border border-blue-200 hover:bg-blue-50 rounded-xl py-2 transition-colors"
            >
              <FaShoppingCart size={11} />
              Move to cart
            </button>

            {/* Remove */}
            <button
              onClick={() => removeFromSaved(item.id)}
              className="cursor-pointer w-full inline-flex items-center justify-center gap-1.5 text-xs font-medium text-slate-400 hover:text-red-500 transition-colors"
            >
              <FaTrash size={10} />
              Remove
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SavedForLater;
