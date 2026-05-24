import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  viewAllHref?: string;
  viewAllLabel?: string;
}

const SectionHeader = ({
  title,
  viewAllHref,
  viewAllLabel = "View all",
}: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-section-title">{title}</h2>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 shrink-0"
        >
          {viewAllLabel}
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
