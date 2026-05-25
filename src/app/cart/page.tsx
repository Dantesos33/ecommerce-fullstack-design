// src/app/cart/page.tsx
import CartHeader from "@/components/cart/CartHeader";
import CartItemList from "@/components/cart/CartItemList";
import CartFooterActions from "@/components/cart/CartFooterActions";
import CartFeatures from "@/components/cart/CartFeatures";
import CartSummary from "@/components/cart/CartSummary";
import PromoBanner from "@/components/PromoBanner";

// Pure Next.js Server Component Page
export default function CartPage() {
  return (
    <div className="w-full bg-slate-50 py-6 md:py-8 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Client Header */}
        <CartHeader />

        <div className="flex flex-col xl:flex-row gap-5">
          <div className="flex-1">
            {/* Dynamic Interactive Cart Items List */}
            <CartItemList />

            {/* Interactive navigation buttons */}
            <CartFooterActions />

            {/* Static zero-bundle Server Component */}
            <CartFeatures />
          </div>

          {/* Dynamic Order Breakdown Pane */}
          <CartSummary />
        </div>
        <PromoBanner />
      </div>
    </div>
  );
}