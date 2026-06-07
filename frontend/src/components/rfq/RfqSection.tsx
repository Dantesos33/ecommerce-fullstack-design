import Image from "next/image";
import { assets } from "@/data/assets";
import { rfqContent } from "@/data/rfq";
import QuoteForm from "./QuoteForm";
import RfqMobileAction from "./RfqMobileAction";

const RfqSection = () => {
  return (
    <section className="w-full" aria-labelledby="rfq-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="relative overflow-hidden rounded-lg min-h-[220px] sm:min-h-[260px] lg:min-h-[340px]">
          <Image
            src={assets.backgrounds.rfqBg}
            alt="RFQ background"
            fill
            unoptimized
            sizes="(max-width: 1280px) 100vw, 1440px"
            className="object-cover object-center"
            priority={false}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center p-6 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div className="flex flex-col gap-5 lg:gap-6 text-white max-w-lg">
              <div>
                <h2
                  id="rfq-heading"
                  className="text-[22px] sm:text-2xl lg:text-[32px] lg:leading-[1.25] font-semibold text-white tracking-tight"
                >
                  {rfqContent.title}
                </h2>
                <p className="mt-4 text-sm sm:text-base lg:text-lg font-normal text-white leading-relaxed lg:leading-[1.6] max-w-[480px]">
                  {rfqContent.description}
                </p>
              </div>
              <RfqMobileAction />
            </div>

            <QuoteForm
              id="rfq-form-desktop"
              className="hidden lg:block max-w-md lg:max-w-[420px] lg:ml-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RfqSection;
