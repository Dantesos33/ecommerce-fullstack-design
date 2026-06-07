import Link from "next/link";

const PromoBanner = () => {
  return (
    <section className="w-full py-4 md:py-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative w-full rounded-2xl overflow-hidden flex items-center justify-between px-8 md:px-12 py-7 md:py-8 gap-4"
          style={{ background: "linear-gradient(135deg, #1d6cf5 0%, #1d6cf5 55%, #2979ff 70%, #1565e8 100%)" }}
        >
          {/* Diagonal decorative shapes */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.06) 41%, rgba(255,255,255,0.06) 55%, transparent 56%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(120deg, transparent 50%, rgba(255,255,255,0.04) 51%, rgba(255,255,255,0.04) 70%, transparent 71%)",
            }}
          />

          {/* Text */}
          <div className="relative z-10">
            <h2 className="text-white font-bold text-lg md:text-xl leading-snug">
              Super discount on more than 100 USD
            </h2>
            <p className="text-blue-100 text-sm mt-1">
              Have you ever finally just write dummy info
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/products"
            className="relative z-10 shrink-0 bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 whitespace-nowrap"
          >
            Shop now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;