import CategorySidebar from "./CategorySidebar";
import HeroBanner from "./HeroBanner";
import UserActionCard from "./UserActionCard";
import PromoCard from "./PromoCard";

const HeroSection = () => {
  return (
    <section className="w-full md:bg-slate-50/60" aria-label="Featured categories and offers">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] lg:grid-cols-[240px_1fr_260px] gap-4">
          <CategorySidebar />

          <HeroBanner />

          <div className="hidden md:flex flex-col gap-4">
            <UserActionCard />
            <PromoCard
              variant="orange"
              title="Get US $10 off with a new supplier"
              href="/offers/new-supplier"
            />
            <PromoCard
              variant="teal"
              title="Send quotes with supplier preferences"
              href="/quotes"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
