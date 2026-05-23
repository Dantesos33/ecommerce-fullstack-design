import Header from "@/components/Header";
import BottomNavbar from "@/components/BottomNavbar";
import HeroSection from "@/components/hero/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BottomNavbar />
      <main className="flex-1">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
