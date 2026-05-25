import Image from "next/image";
import Link from "next/link";
import { type Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.id}`}
      className="service-card flex flex-col border border-slate-200 rounded-xl"
      style={{ overflow: "visible", backgroundColor: "#ffffff" }}
    >
      {/* Image with subtle dark overlay — matches original design */}
      <div style={{ borderRadius: "12px 12px 0 0", overflow: "hidden", width: "100%", height: "160px", flexShrink: 0, position: "relative" }}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          style={{ objectFit: "cover", zIndex: 0 }}
        />
        {/* Dark scrim — must be after Image and have higher z-index */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.35)", zIndex: 1 }} />
      </div>

      {/* Icon badge — overlaps image/text divide */}
      <div
        className="self-end mr-4 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0"
        style={{ marginTop: "-20px", position: "relative", zIndex: 10, boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}
      >
        <Icon size={15} className="text-slate-700" />
      </div>

      {/* Title */}
      <div className="px-3 pt-2 pb-4">
        <p className="text-sm font-medium text-slate-800 leading-snug" style={{ maxWidth: "55%" }}>
          {service.title}
        </p>
      </div>

      <style>{`
        .service-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px -6px rgba(59, 130, 246, 0.15), 0 4px 10px -3px rgba(59, 130, 246, 0.1);
          border-color: #bfdbfe;
        }
      `}</style>
    </Link>
  );
};

export default ServiceCard;