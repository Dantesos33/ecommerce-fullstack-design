import CountdownTimer from "./CountdownTimer";
import FlashSaleCard from "./FlashSaleCard";
import HorizontalScrollRow from "./HorizontalScrollRow";
import { flashSale } from "@/data/flash-sale";

const FlashSaleSection = () => {
  return (
    <section
      className="rounded-lg border border-slate-200 bg-white overflow-hidden"
      aria-labelledby="flash-sale-heading"
    >
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-4 sm:p-5 lg:w-[220px] lg:shrink-0 lg:flex-col lg:items-start lg:justify-center lg:border-b-0 lg:border-r lg:p-6">
          <div>
            <h2 id="flash-sale-heading" className="text-col-title font-bold">
              {flashSale.title}
            </h2>
            <p className="text-ui-muted mt-1 hidden sm:block">
              {flashSale.subtitle}
            </p>
            <p className="text-ui-muted mt-1 sm:hidden">
              {flashSale.mobileSubtitle}
            </p>
          </div>
          <CountdownTimer
            endDate={flashSale.endDate}
            className="shrink-0 lg:mt-5"
          />
        </div>

        <HorizontalScrollRow className="flex-1 lg:overflow-visible lg:flex">
          {flashSale.products.map((product) => (
            <FlashSaleCard key={product.id} product={product} />
          ))}
        </HorizontalScrollRow>
      </div>
    </section>
  );
};

export default FlashSaleSection;
