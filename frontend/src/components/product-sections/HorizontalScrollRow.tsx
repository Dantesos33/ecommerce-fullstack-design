import { ReactNode } from "react";

interface HorizontalScrollRowProps {
  children: ReactNode;
  className?: string;
}

const HorizontalScrollRow = ({
  children,
  className = "",
}: HorizontalScrollRowProps) => {
  return (
    <div
      className={`flex overflow-x-auto border-t border-slate-200 lg:border-t-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default HorizontalScrollRow;
