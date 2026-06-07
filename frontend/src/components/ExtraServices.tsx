import { services } from "@/data/services";
import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";

const ExtraServices = () => {
  return (
    <section className="w-full py-6 md:py-8 bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Our extra services" />

        {/* 2 cols on mobile, 4 on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraServices;