import { suppliers } from "@/data/suppliers";
import SectionHeader from "./SectionHeader";
import SupplierItem from "./SupplierItem";

const SuppliersByRegion = () => {
  return (
    <section className="w-full py-6 md:py-8 bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Suppliers by region" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-5">
          {suppliers.map((supplier) => (
            <SupplierItem key={supplier.id} supplier={supplier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuppliersByRegion;