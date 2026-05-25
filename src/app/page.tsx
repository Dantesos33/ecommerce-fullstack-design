import BottomNavbar from "@/components/BottomNavbar";
import HeroSection from "@/components/hero/HeroSection";
import ProductSections from "@/components/product-sections/ProductSections";
import RfqSection from "@/components/rfq/RfqSection";
import RecommendedItems from "@/components/RecommendedItems";
import ExtraServices from "@/components/ExtraServices";
import SuppliersByRegion from "@/components/Suppliersbyregion";

export default function Home() {
  return (
    <>
      <BottomNavbar />
      <HeroSection />
      <ProductSections />
      <RfqSection />
      <RecommendedItems />
      <ExtraServices />
      <SuppliersByRegion />
    </>
  );
}
