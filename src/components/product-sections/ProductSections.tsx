import FlashSaleSection from "./FlashSaleSection";
import CategorySection from "./CategorySection";
import {
  homeOutdoorSection,
  electronicsSection,
} from "@/data/category-sections";

const ProductSections = () => {
  return (
    <section
      className="w-full"
      aria-label="Deals and category products"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 flex flex-col gap-4 lg:gap-5">
        <FlashSaleSection />
        <CategorySection section={homeOutdoorSection} />
        <CategorySection section={electronicsSection} />
      </div>
    </section>
  );
};

export default ProductSections;
