"use client";

import { useState, useEffect } from "react";
import { FaThLarge, FaList, FaTimes } from "react-icons/fa";
import { fetchProducts, Product } from "@/data/listing-data";
import FilterSidebar from "./ListingFilterSidebar";
import ProductCardGrid from "./ListingCard";
import ProductCardList from "./ListingCardList";

type ViewMode = "grid" | "list";

const ITEMS_PER_PAGE = 9;

const ProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode]           = useState<ViewMode>("grid");
  const [selectedBrands, setSelectedBrands]     = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [priceMin, setPriceMin]           = useState("");
  const [priceMax, setPriceMax]           = useState("");
  const [appliedMin, setAppliedMin]       = useState<number | null>(null);
  const [appliedMax, setAppliedMax]       = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [verifiedOnly, setVerifiedOnly]   = useState(false);
  const [currentPage, setCurrentPage]     = useState(1);
  const [showPerPage, setShowPerPage]     = useState(9);

  // Fetch products on component mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Failed to load products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const toggleBrand = (b: string) =>
    setSelectedBrands((prev) => prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]);

  const toggleFeature = (f: string) =>
    setSelectedFeatures((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]);

  const applyPrice = () => {
    setAppliedMin(priceMin ? Number(priceMin) : null);
    setAppliedMax(priceMax ? Number(priceMax) : null);
  };

  // Active filter tags
  const activeTags = [
    ...selectedBrands,
    ...selectedFeatures,
    ...(selectedRating ? [`${selectedRating} star`] : []),
  ];

  const removeTag = (tag: string) => {
    setSelectedBrands((p) => p.filter((b) => b !== tag));
    setSelectedFeatures((p) => p.filter((f) => f !== tag));
    if (tag.endsWith("star")) setSelectedRating(null);
  };

  const clearAll = () => {
    setSelectedBrands([]);
    setSelectedFeatures([]);
    setSelectedRating(null);
    setAppliedMin(null);
    setAppliedMax(null);
    setPriceMin("");
    setPriceMax("");
  };

  // Filter products
  const filtered = products.filter((p) => {
    if (selectedBrands.length && !selectedBrands.includes(p.brand)) return false;
    if (verifiedOnly && !p.freeShipping) return false;
    if (appliedMin !== null && p.price < appliedMin) return false;
    if (appliedMax !== null && p.price > appliedMax) return false;
    if (selectedRating && Math.floor(p.rating / 2) < selectedRating) return false;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / showPerPage);
  const paginated  = filtered.slice((currentPage - 1) * showPerPage, currentPage * showPerPage);

  if (loading) {
    return (
      <div className="w-full bg-slate-50 py-6 md:py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-40 text-slate-400 text-sm">
            Loading products...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-slate-50 py-6 md:py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-40 text-red-500 text-sm">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 py-6 md:py-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-4 flex items-center gap-1">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span>/</span>
          <span className="hover:text-blue-600 cursor-pointer">Clothings</span>
          <span>/</span>
          <span className="hover:text-blue-600 cursor-pointer">Men&apos;s wear</span>
          <span>/</span>
          <span className="text-slate-600">Summer clothing</span>
        </nav>

        <div className="flex gap-6">
          {/* ── Sidebar ── */}
          <div className="hidden md:block w-[200px] lg:w-[220px] shrink-0">
            <FilterSidebar
              selectedBrands={selectedBrands}
              onBrandToggle={toggleBrand}
              selectedFeatures={selectedFeatures}
              onFeatureToggle={toggleFeature}
              priceMin={priceMin}
              priceMax={priceMax}
              onPriceMinChange={setPriceMin}
              onPriceMaxChange={setPriceMax}
              onApplyPrice={applyPrice}
              selectedRating={selectedRating}
              onRatingSelect={(r) => setSelectedRating((prev) => prev === r ? null : r)}
            />
          </div>

          {/* ── Main content ── */}
          <div className="flex-1 min-w-0">

            {/* Top bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-800">{filtered.length.toLocaleString()}</span> items in{" "}
                <span className="font-semibold text-slate-800">Mobile accessory</span>
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                {/* Verified toggle */}
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={verifiedOnly}
                    onChange={(e) => setVerifiedOnly(e.target.checked)}
                    className="accent-blue-600 cursor-pointer"
                  />
                  <span className="text-xs text-slate-600">Verified only</span>
                </label>

                {/* Featured select */}
                <select className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 text-slate-600 outline-none cursor-pointer">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>

                {/* View toggle */}
                <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`cursor-pointer p-2 transition-colors duration-200 ${viewMode === "grid" ? "bg-blue-600 text-white" : "bg-white text-slate-500 hover:bg-slate-50"}`}
                  >
                    <FaThLarge size={14} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`cursor-pointer p-2 transition-colors duration-200 ${viewMode === "list" ? "bg-blue-600 text-white" : "bg-white text-slate-500 hover:bg-slate-50"}`}
                  >
                    <FaList size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Active filter tags */}
            {activeTags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {activeTags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 bg-white border border-slate-200 text-xs text-slate-600 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                    <button onClick={() => removeTag(tag)} className="cursor-pointer text-slate-400 hover:text-slate-600">
                      <FaTimes size={10} />
                    </button>
                  </span>
                ))}
                <button
                  onClick={clearAll}
                  className="cursor-pointer text-xs text-blue-600 hover:underline"
                >
                  Clear all filter
                </button>
              </div>
            )}

            {/* Products */}
            {paginated.length === 0 ? (
              <div className="flex items-center justify-center h-40 text-slate-400 text-sm">
                No products match your filters.
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {paginated.map((p) => (
                  <ProductCardGrid key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {paginated.map((p) => (
                  <ProductCardList key={p.id} product={p} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {filtered.length > 0 && (
              <div className="flex flex-wrap items-center justify-between gap-3 mt-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">Show</span>
                  <select
                    value={showPerPage}
                    onChange={(e) => { setShowPerPage(Number(e.target.value)); setCurrentPage(1); }}
                    className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 text-slate-600 outline-none cursor-pointer"
                  >
                    {[9, 18, 27, 36].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="cursor-pointer px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    ‹
                  </button>
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`cursor-pointer px-2.5 py-1.5 text-xs border rounded-lg transition-colors ${
                        currentPage === page
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="cursor-pointer px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    ›
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
