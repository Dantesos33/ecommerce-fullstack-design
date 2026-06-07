"use client";

import { useState } from "react";
import { categories, type Category } from "@/data/categories";

const CategorySidebar = () => {
  const [active, setActive] = useState<Category>(categories[0]);

  return (
    <aside className="hidden lg:flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden shrink-0">
      <nav className="flex flex-col py-2">
        {categories.map((category) => {
          const isActive = active === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`cursor-pointer text-left text-ui px-5 py-2.5 transition-colors duration-200 ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default CategorySidebar;
