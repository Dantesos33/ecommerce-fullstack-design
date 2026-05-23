import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import Dropdown from "./Dropdown";
import { navLinks, helpLinks } from "@/data/nav-data";

const localeItems = [
  { label: "English, USD", href: "/" },
  { label: "French, EUR", href: "/" },
];

const shipItems = [
  { label: "Germany", href: "/" },
  { label: "USA", href: "/" },
];

const BottomNavbar = () => {
  return (
    <div className="w-full border-b border-slate-200 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center justify-between gap-4 md:gap-6">
          <button
            type="button"
            className="hidden md:flex shrink-0 items-center gap-2 text-ui font-medium"
          >
            <HiMenu size={20} />
            <span>All category</span>
          </button>

          <div className="flex-1 min-w-0 overflow-x-auto md:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center gap-6 h-14 w-max md:w-auto pr-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="shrink-0 text-ui hover:text-blue-600 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}

              <Dropdown label="Help" items={helpLinks} />

              <div className="flex md:hidden items-center gap-6">
                <Dropdown label="English, USD" items={localeItems} />
                <Dropdown label="Ship to 🇩🇪" items={shipItems} />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Dropdown label="English, USD" items={localeItems} />
            <Dropdown label="Ship to 🇩🇪" items={shipItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
