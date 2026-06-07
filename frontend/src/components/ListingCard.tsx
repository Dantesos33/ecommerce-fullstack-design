// src/components/ProductCardGrid.tsx
"use client";

import Link from "next/link";
import { FaRegHeart, FaShoppingCart, FaCheck } from "react-icons/fa";
import { type Product } from "@/data/listing-data";
import { useCart } from "@/context/CartContext";
import StarRating from "./ListingStarRating";

interface ProductCardGridProps {
  product: Product;
}

const ProductCardGrid = ({ product }: ProductCardGridProps) => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const inCart = cartItems.some((item) => item.id === product.id);

  const handleCartToggle = () => {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-300">
      {/* Image */}
      <div className="relative flex items-center justify-center bg-white h-[180px] p-4">
        <Link
          href={`/products/${product.id}`}
          className="relative w-[140px] h-[140px]"
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "140px",
              height: "140px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Link>
        <button className="cursor-pointer absolute top-3 right-3 text-slate-300 hover:text-rose-500 transition-colors duration-200">
          <FaRegHeart size={16} />
        </button>
      </div>

      {/* Info */}
      <div className="px-3 pb-3 flex flex-1 flex-col justify-between gap-1 border-t border-slate-100">
        <div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-base font-bold text-slate-800">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <StarRating rating={product.rating} reviews={product.reviews} />
          <Link
            href={`/products/${product.id}`}
            className="block text-xs text-slate-600 leading-snug line-clamp-2 mt-0.5 hover:text-blue-600 transition-colors"
          >
            {product.title}
          </Link>
        </div>

        {/* Toggle Cart Button */}
        <button
          onClick={handleCartToggle}
          className={`cursor-pointer mt-3 w-full flex items-center justify-center gap-2 text-xs font-semibold py-2 rounded-lg transition-all duration-200 ${
            inCart
              ? "bg-green-50 border border-green-300 text-green-700 hover:bg-red-50 hover:border-red-200 hover:text-red-600"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {inCart ? (
            <>
              <FaCheck size={11} />
              <span className="group-hover-remove">Added</span>
            </>
          ) : (
            <>
              <FaShoppingCart size={12} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCardGrid;
