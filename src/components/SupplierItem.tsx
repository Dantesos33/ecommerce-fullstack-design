import Link from "next/link";
import { type Supplier } from "@/data/suppliers";

interface SupplierItemProps {
  supplier: Supplier;
}

const SupplierItem = ({ supplier }: SupplierItemProps) => {
  return (
    <Link
      href={`https://${supplier.shopUrl}`}
      className="flex items-center gap-3 group"
    >
      {/* Flag */}
      <div style={{ width: "32px", height: "22px", flexShrink: 0, overflow: "hidden", borderRadius: "3px" }}>
        <img
          src={supplier.flag}
          alt={supplier.country}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-sm font-medium text-slate-800 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
          {supplier.country}
        </span>
        <span className="text-xs text-slate-400 leading-tight">
          {supplier.shopUrl}
        </span>
      </div>
    </Link>
  );
};

export default SupplierItem;