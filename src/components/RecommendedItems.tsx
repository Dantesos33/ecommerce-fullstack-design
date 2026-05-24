import { recommendations } from "@/data/recommendations";
import SectionHeader from "./SectionHeader";
import ProductGrid from "./ProductGrid";

const RecommendedItems = () => {
  return (
    <section className="w-full py-6 md:py-8 bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Recommended items" />
        <ProductGrid products={recommendations} />
      </div>
    </section>
  );
};

export default RecommendedItems;
