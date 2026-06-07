import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";

const HeroBanner = () => {
  return (
    <article className="relative w-full aspect-[800/420] md:min-h-[300px] md:aspect-auto lg:min-h-[360px] rounded-lg overflow-hidden">
      <Image
        src={assets.backgrounds.heroBg}
        alt="Latest trending electronic items"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 800px"
        className="object-cover object-center"
      />

      <div className="relative z-10 flex h-full flex-col justify-center px-5 py-6 sm:px-8 sm:py-8 md:px-10 max-w-[70%] sm:max-w-[55%]">
        <p className="text-ui text-slate-800">Latest trending</p>
        <h2 className="text-section-title mt-1 sm:mt-2 mb-4 sm:mb-6 font-bold">
          Electronic items
        </h2>
        <Link
          href="/categories/electronics"
          className="inline-flex w-fit items-center justify-center px-5 py-2.5 bg-white text-blue-600 text-sm font-medium rounded-md shadow-sm hover:bg-blue-50 transition-colors duration-200"
        >
          Learn more
        </Link>
      </div>
    </article>
  );
};

export default HeroBanner;
