"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaHeart, FaRegHeart, FaStar, FaRegStar, FaStarHalfAlt,
  FaCheckCircle, FaShippingFast, FaChevronRight, FaChevronLeft,
  FaRegCommentDots, FaShareAlt,
} from "react-icons/fa";
import { type Product } from "@/data/listing-data";

// ── Stars ─────────────────────────────────────────────────────────────────────
const Stars = ({ rating }: { rating: number }) => {
  const stars = rating / 2;
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <span key={i} className="text-amber-400">
          {stars >= i ? <FaStar size={13} /> : stars >= i - 0.5 ? <FaStarHalfAlt size={13} /> : <FaRegStar size={13} />}
        </span>
      ))}
    </div>
  );
};

// ── Supplier Card ─────────────────────────────────────────────────────────────
const SupplierCard = ({ wished, onWish }: { wished: boolean; onWish: () => void }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-3 w-full">
    {/* Header */}
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">R</div>
      <div>
        <p className="text-[11px] text-slate-400">Supplier</p>
        <p className="text-sm font-semibold text-slate-800 leading-tight">Guanjoi Trading LLC</p>
      </div>
    </div>

    {/* Details */}
    <div className="flex flex-col gap-2 text-xs text-slate-600">
      <div className="flex items-center gap-2">
        <img src="https://flagcdn.com/w20/de.png" alt="Germany" style={{ width: "20px", height: "14px", objectFit: "cover", borderRadius: "2px" }} />
        <span>Germany, Berlin</span>
      </div>
      <div className="flex items-center gap-2">
        <FaCheckCircle className="text-slate-400" size={12} />
        <span>Verified Seller</span>
      </div>
      <div className="flex items-center gap-2">
        <FaShippingFast className="text-slate-400" size={12} />
        <span>Worldwide shipping</span>
      </div>
    </div>

    {/* Actions */}
    <button className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors duration-200">
      Send inquiry
    </button>
    <button className="cursor-pointer w-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium py-2.5 rounded-lg transition-colors duration-200">
      Seller&apos;s profile
    </button>
    <button
      onClick={onWish}
      className="cursor-pointer flex items-center justify-center gap-2 text-sm transition-colors"
      style={{ color: wished ? "#f43f5e" : "#94a3b8" }}
    >
      {wished ? <FaHeart size={14} /> : <FaRegHeart size={14} />}
      Save for later
    </button>
  </div>
);

// ── You May Like ──────────────────────────────────────────────────────────────
const YouMayLike = ({ products }: { products: Product[] }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-4">
    <h3 className="text-sm font-semibold text-slate-800 mb-3">You may like</h3>
    <div className="flex flex-col divide-y divide-slate-100">
      {products.slice(0, 5).map((p) => (
        <Link key={p.id} href={`/products/${p.id}`} className="flex items-center gap-3 group py-2.5 first:pt-0 last:pb-0">
          <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100">
            <img src={p.image} alt={p.title} style={{ width: "40px", height: "40px", objectFit: "contain" }} />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">{p.title}</p>
            <p className="text-xs font-semibold text-slate-800 mt-0.5">
              ${p.price.toFixed(2)}
              <span className="text-slate-400 line-through ml-1.5 font-normal">${p.originalPrice.toFixed(2)}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

// ── Main ──────────────────────────────────────────────────────────────────────
interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

const ProductDetail = ({ product, relatedProducts }: ProductDetailProps) => {
  const thumbnails = [product.image, ...relatedProducts.slice(0, 5).map((p) => p.image)];
  const [selectedImg, setSelectedImg] = useState(0);
  const [wished, setWished]           = useState(false);
  const [activeTab, setActiveTab]     = useState<"description"|"reviews"|"shipping"|"seller">("description");

  const prevImg = () => setSelectedImg((i) => (i - 1 + thumbnails.length) % thumbnails.length);
  const nextImg = () => setSelectedImg((i) => (i + 1) % thumbnails.length);

  const priceTiers = [
    { range: "50-100 pcs",  price: `$${(product.price * 1.1).toFixed(2)}`,  highlight: false },
    { range: "100-700 pcs", price: `$${product.price.toFixed(2)}`,           highlight: true  },
    { range: "700+ pcs",    price: `$${(product.price * 0.9).toFixed(2)}`,   highlight: false },
  ];

  const specs = [
    { label: "Price",         value: "Negotiable" },
    { label: "Type",          value: "Classic, shoes" },
    { label: "Material",      value: "Plastic material" },
    { label: "Design",        value: "Modern nice" },
    { label: "Customization", value: "Customized logo and design custom packages" },
    { label: "Protection",    value: "Refund Policy" },
    { label: "Warranty",      value: "2 years full warranty" },
  ];

  const tableSpecs = [
    { label: "Model",       value: "46790867" },
    { label: "Style",       value: "Classic style" },
    { label: "Certificate", value: "ISO-98965712" },
    { label: "Size",        value: "34mm x 453mm x 19mm" },
    { label: "Memory",      value: "36GB RAM" },
  ];

  const features = [
    "Some great feature name here",
    "Lorem ipsum dolor sit amet, consectetur",
    "Duis aute irure dolor in reprehenderit",
    "Some great feature name here (extended)",
  ];

  return (
    <div className="w-full bg-slate-50 py-6 md:py-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-5 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-600">Clothings</Link>
          <span>/</span>
          <span className="hover:text-blue-600 cursor-pointer">Men&apos;s wear</span>
          <span>/</span>
          <span className="text-slate-600">Summer clothing</span>
        </nav>

        {/* ── Top section ── */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 mb-5">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* ── Col 1: Images ── */}
            <div className="flex flex-col gap-3 lg:w-[280px] shrink-0">
              {/* Main image */}
              <div className="relative flex items-center justify-center bg-slate-50 border border-slate-100 rounded-xl h-[260px] md:h-[300px]">
                <img
                  src={thumbnails[selectedImg]}
                  alt={product.title}
                  style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", padding: "24px" }}
                />
                <button onClick={prevImg} className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm hover:bg-slate-50">
                  <FaChevronLeft size={10} className="text-slate-500" />
                </button>
                <button onClick={nextImg} className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm hover:bg-slate-50">
                  <FaChevronRight size={10} className="text-slate-500" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {thumbnails.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImg(i)}
                    className={`cursor-pointer shrink-0 w-[52px] h-[52px] rounded-lg border-2 flex items-center justify-center bg-white transition-all duration-200 ${selectedImg === i ? "border-blue-500" : "border-slate-200 hover:border-slate-300"}`}
                  >
                    <img src={src} alt="" style={{ width: "36px", height: "36px", objectFit: "contain" }} />
                  </button>
                ))}
              </div>
            </div>

            {/* ── Col 2: Product info ── */}
            <div className="flex-1 min-w-0">
              {/* In stock */}
              <p className="text-xs text-green-600 font-medium mb-2 flex items-center gap-1.5">
                <FaCheckCircle size={11} /> In stock
              </p>

              {/* Title */}
              <h1 className="text-base md:text-lg font-bold text-slate-800 leading-snug mb-3">
                {product.title}
              </h1>

              {/* Rating row */}
              <div className="flex items-center gap-2 flex-wrap mb-4 text-xs text-slate-500">
                <Stars rating={product.rating} />
                <span className="font-medium text-slate-700">{product.rating}</span>
                <span className="flex items-center gap-1"><FaRegCommentDots size={11} /> {product.reviews} reviews</span>
                <span>·</span>
                <span>{154} sold</span>
              </div>

              {/* Price tiers */}
              <div className="flex rounded-xl overflow-hidden border border-slate-200 mb-4 w-full max-w-sm">
                {priceTiers.map((tier, i) => (
                  <div
                    key={i}
                    className={`flex-1 px-3 py-2.5 text-center ${i !== priceTiers.length - 1 ? "border-r border-slate-200" : ""}`}
                    style={{ backgroundColor: tier.highlight ? "#fff7ed" : "#ffffff" }}
                  >
                    <p className="text-sm font-bold text-rose-500">{tier.price}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{tier.range}</p>
                  </div>
                ))}
              </div>

              {/* Specs */}
              <div className="flex flex-col gap-2">
                {specs.map(({ label, value }) => (
                  <div key={label} className="flex gap-3 text-sm">
                    <span className="text-slate-400 shrink-0 w-28">{label}:</span>
                    <span className="text-slate-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Col 3: Supplier (desktop) ── */}
            <div className="hidden lg:block w-[200px] xl:w-[220px] shrink-0">
              <SupplierCard wished={wished} onWish={() => setWished((p) => !p)} />
            </div>
          </div>

          {/* Mobile: supplier card */}
          <div className="lg:hidden mt-5">
            <SupplierCard wished={wished} onWish={() => setWished((p) => !p)} />
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-5">
          <div className="flex border-b border-slate-100 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {(["description","reviews","shipping","seller"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer shrink-0 px-5 py-3.5 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab === "seller" ? "About seller" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 p-5 md:p-6">
            {/* Tab content */}
            <div className="flex-1 min-w-0">
              {activeTab === "description" && (
                <div className="flex flex-col gap-5">
                  <p className="text-sm text-slate-600 leading-relaxed">{product.description} {product.description}</p>
                  <table className="w-full text-sm border-collapse">
                    <tbody>
                      {tableSpecs.map(({ label, value }, i) => (
                        <tr key={label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                          <td className="px-4 py-2.5 text-slate-500 w-[160px] border border-slate-100">{label}</td>
                          <td className="px-4 py-2.5 text-slate-700 border border-slate-100">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <ul className="flex flex-col gap-2">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <FaCheckCircle size={13} className="text-green-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === "reviews"  && <p className="text-sm text-slate-600">{product.reviews} customer reviews · Average rating {product.rating}/10</p>}
              {activeTab === "shipping" && <p className="text-sm text-slate-600">{product.freeShipping ? "This item qualifies for Free Shipping." : "Standard shipping rates apply."}</p>}
              {activeTab === "seller"   && <p className="text-sm text-slate-600">Guanjoi Trading LLC · Germany, Berlin · Verified Seller</p>}
            </div>

            {/* You may like — desktop only, inside tab area */}
            <div className="hidden lg:block w-[200px] xl:w-[220px] shrink-0">
              <YouMayLike products={relatedProducts} />
            </div>
          </div>
        </div>

        {/* Mobile: You may like */}
        <div className="lg:hidden mb-5">
          <YouMayLike products={relatedProducts} />
        </div>

        {/* ── Related products ── */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-section-title mb-4">Related products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.id}`}
                  className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center h-[120px] p-3 bg-white">
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{ width: "90px", height: "90px", objectFit: "contain", display: "block" }}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="px-2.5 pb-2.5 border-t border-slate-100">
                    <p className="text-xs text-slate-500 line-clamp-2 leading-snug mt-1.5">{p.title}</p>
                    <p className="text-xs font-bold text-slate-800 mt-1">${p.price.toFixed(2)}</p>
                    <p className="text-[11px] text-slate-400 line-through">${p.originalPrice.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetail;