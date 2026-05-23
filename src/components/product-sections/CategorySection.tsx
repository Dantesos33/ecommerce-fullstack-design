import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import CategoryBanner from "./CategoryBanner";
import ProductGridCard from "./ProductGridCard";
import HorizontalScrollRow from "./HorizontalScrollRow";
import type { CategorySectionData } from "@/data/category-sections";

/** Matches Figma: 2 rows × ~144px per cell */
const DESKTOP_GRID_HEIGHT = 288;

interface CategorySectionProps {
  section: CategorySectionData;
}

const CategorySection = ({ section }: CategorySectionProps) => {
  const mobileTitle = section.mobileTitle ?? section.title;

  return (
    <section
      className="rounded-lg border border-slate-200 bg-white overflow-hidden"
      aria-labelledby={`${section.id}-heading`}
    >
      <h2
        id={`${section.id}-heading`}
        className="text-col-title font-bold px-4 pt-4 pb-3 border-b border-slate-200 lg:hidden"
      >
        {mobileTitle}
      </h2>

      <div className="flex flex-col lg:block">
        <div
          className="hidden lg:grid lg:grid-cols-[280px_1fr]"
          style={{ minHeight: DESKTOP_GRID_HEIGHT }}
        >
          <CategoryBanner
            title={section.title}
            image={section.bannerImage}
            href={section.sourceHref}
          />

          <div
            className="grid grid-cols-4 grid-rows-2 h-full divide-x divide-y divide-slate-200"
            style={{ minHeight: DESKTOP_GRID_HEIGHT }}
          >
            {section.products.map((product) => (
              <ProductGridCard
                key={product.id}
                product={product}
                variant="grid"
              />
            ))}
          </div>
        </div>

        <HorizontalScrollRow className="lg:hidden">
          {section.products.map((product) => (
            <ProductGridCard
              key={product.id}
              product={product}
              variant="scroll"
            />
          ))}
        </HorizontalScrollRow>
      </div>

      <Link
        href={section.sourceHref}
        className="flex lg:hidden items-center justify-center gap-1 border-t border-slate-200 py-3.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200"
      >
        Source now
        <FaChevronRight size={12} />
      </Link>
    </section>
  );
};

export default CategorySection;
