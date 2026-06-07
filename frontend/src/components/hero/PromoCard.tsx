import Link from "next/link";

type PromoCardVariant = "orange" | "teal";

interface PromoCardProps {
  title: string;
  href?: string;
  variant: PromoCardVariant;
}

const variantStyles: Record<PromoCardVariant, string> = {
  orange: "bg-[#F68629] hover:bg-[#e57a24]",
  teal: "bg-[#33B5C5] hover:bg-[#2da4b3]",
};

const PromoCard = ({ title, href = "#", variant }: PromoCardProps) => {
  return (
    <Link
      href={href}
      className={`block rounded-lg px-4 py-5 text-white text-sm sm:text-base font-medium leading-snug transition-colors duration-200 ${variantStyles[variant]}`}
    >
      {title}
    </Link>
  );
};

export default PromoCard;
