"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterSection = ({ title, children, defaultOpen = true }: FilterSectionProps) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100 py-4">
      <button
        onClick={() => setOpen((p) => !p)}
        className="cursor-pointer flex items-center justify-between w-full text-left"
      >
        <span className="text-sm font-semibold text-slate-800">{title}</span>
        {open ? <FaChevronUp size={12} className="text-slate-400" /> : <FaChevronDown size={12} className="text-slate-400" />}
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
};

const categories = ["Mobile accessory", "Electronics", "Smartphones", "Modern tech"];
const brands     = ["Samsung", "Apple", "Huawei", "Poco", "Lenovo"];
const features   = ["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory"];
const ratings    = [5, 4, 3, 2, 1];

interface FilterSidebarProps {
  selectedBrands: string[];
  onBrandToggle: (brand: string) => void;
  selectedFeatures: string[];
  onFeatureToggle: (f: string) => void;
  priceMin: string;
  priceMax: string;
  onPriceMinChange: (v: string) => void;
  onPriceMaxChange: (v: string) => void;
  onApplyPrice: () => void;
  selectedRating: number | null;
  onRatingSelect: (r: number) => void;
}

const FilterSidebar = ({
  selectedBrands, onBrandToggle,
  selectedFeatures, onFeatureToggle,
  priceMin, priceMax, onPriceMinChange, onPriceMaxChange, onApplyPrice,
  selectedRating, onRatingSelect,
}: FilterSidebarProps) => {
  return (
    <aside className="w-full">
      {/* Category */}
      <FilterSection title="Category">
        <ul className="flex flex-col gap-2">
          {categories.map((c) => (
            <li key={c}>
              <button className="cursor-pointer text-sm text-slate-600 hover:text-blue-600 transition-colors text-left w-full">
                {c}
              </button>
            </li>
          ))}
        </ul>
        <button className="cursor-pointer mt-2 text-xs text-blue-600 hover:underline">See all</button>
      </FilterSection>

      {/* Brands */}
      <FilterSection title="Brands">
        <ul className="flex flex-col gap-2">
          {brands.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`brand-${b}`}
                checked={selectedBrands.includes(b)}
                onChange={() => onBrandToggle(b)}
                className="w-4 h-4 rounded border-slate-300 text-blue-600 cursor-pointer accent-blue-600"
              />
              <label htmlFor={`brand-${b}`} className="text-sm text-slate-600 cursor-pointer">
                {b}
              </label>
            </li>
          ))}
        </ul>
        <button className="cursor-pointer mt-2 text-xs text-blue-600 hover:underline">See all</button>
      </FilterSection>

      {/* Features */}
      <FilterSection title="Features">
        <ul className="flex flex-col gap-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`feat-${f}`}
                checked={selectedFeatures.includes(f)}
                onChange={() => onFeatureToggle(f)}
                className="w-4 h-4 rounded border-slate-300 cursor-pointer accent-blue-600"
              />
              <label htmlFor={`feat-${f}`} className="text-sm text-slate-600 cursor-pointer">
                {f}
              </label>
            </li>
          ))}
        </ul>
        <button className="cursor-pointer mt-2 text-xs text-blue-600 hover:underline">See all</button>
      </FilterSection>

      {/* Price range */}
      <FilterSection title="Price range">
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={priceMin}
            onChange={(e) => onPriceMinChange(e.target.value)}
            className="w-full border border-slate-200 rounded-lg px-2 py-1.5 text-xs text-slate-700 outline-none focus:border-blue-400"
          />
          <span className="text-slate-400 text-xs">—</span>
          <input
            type="number"
            placeholder="Max"
            value={priceMax}
            onChange={(e) => onPriceMaxChange(e.target.value)}
            className="w-full border border-slate-200 rounded-lg px-2 py-1.5 text-xs text-slate-700 outline-none focus:border-blue-400"
          />
        </div>
        <button
          onClick={onApplyPrice}
          className="cursor-pointer mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-1.5 rounded-lg transition-colors duration-200"
        >
          Apply
        </button>
      </FilterSection>

      {/* Condition */}
      <FilterSection title="Condition" defaultOpen={false}>
        {["Any", "Refurbished", "Brand new", "Old items"].map((c) => (
          <label key={c} className="flex items-center gap-2 mb-2 cursor-pointer">
            <input type="radio" name="condition" className="accent-blue-600" />
            <span className="text-sm text-slate-600">{c}</span>
          </label>
        ))}
      </FilterSection>

      {/* Ratings */}
      <FilterSection title="Ratings">
        <div className="flex flex-col gap-2.5">
          {ratings.map((r) => (
            <label key={r} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedRating === r}
                onChange={() => onRatingSelect(r)}
                className="w-4 h-4 rounded border-slate-300 cursor-pointer accent-blue-600"
              />
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} style={{ fontSize: "16px", lineHeight: 1 }} className={i <= r ? "text-amber-400" : "text-slate-200"}>
                    ★
                  </span>
                ))}
              </div>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Manufacturer */}
      <FilterSection title="Manufacturer" defaultOpen={false}>
        <p className="text-xs text-slate-400">Coming soon</p>
      </FilterSection>
    </aside>
  );
};

export default FilterSidebar;