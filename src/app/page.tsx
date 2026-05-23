import Header from "@/components/Header";
import BottomNavbar from "@/components/BottomNavbar";
import HeroSection from "@/components/hero/HeroSection";
import ProductSections from "@/components/product-sections/ProductSections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BottomNavbar />
      <main className="flex-1">
        <HeroSection />
        <ProductSections />
      </main>
      <Footer />
    </div>
  );
}
