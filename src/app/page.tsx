import Header from "@/components/Header";
import BottomNavbar from "@/components/BottomNavbar";
import HeroSection from "@/components/hero/HeroSection";
import ProductSections from "@/components/product-sections/ProductSections";
import RfqSection from "@/components/rfq/RfqSection";
import RecommendedItems from "@/components/RecommendedItems";
import ExtraServices from "@/components/ExtraServices";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BottomNavbar />
      <main className="flex-1">
        <HeroSection />
        <ProductSections />
        <RfqSection />
        <RecommendedItems />
        <ExtraServices />
      </main>
      <Footer />
    </div>
  );
}
