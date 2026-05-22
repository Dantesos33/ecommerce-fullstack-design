import Link from "next/link";
import { ReactNode } from "react";

type NavItemProps = {
  href: string;
  icon: ReactNode;
  label: string;
};

const NavItem = ({ href, icon, label }: NavItemProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-2 hover:text-blue-800"
    >
      {icon}
      <div>{label}</div>
    </Link>
  );
};

export default NavItem;
