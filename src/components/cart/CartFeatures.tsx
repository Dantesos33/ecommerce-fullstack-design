// src/components/cart/CartFeatures.tsx
import { FaLock, FaHeadset, FaTruck } from "react-icons/fa";

const CartFeatures = () => {
  const features = [
    { icon: <FaLock size={14} />, title: "Secure payment", desc: "100% protected checkout" },
    { icon: <FaHeadset size={14} />, title: "Customer support", desc: "24/7 customer assistance" },
    { icon: <FaTruck size={14} />, title: "Free delivery", desc: "For eligible orders" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
      {features.map((item, i) => (
        <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
            {item.icon}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">{item.title}</p>
            <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartFeatures;