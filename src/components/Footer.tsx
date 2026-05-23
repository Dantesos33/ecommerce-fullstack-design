import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaApple,
} from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import Image from "next/image";
import NewsLetter from "./NewsLetter";

// ── Data ────────────────────────────────────────────────────────────────────

const footerColumns = [
  {
    heading: "About",
    links: ["About Us", "Find store", "Categories", "Blogs"],
  },
  {
    heading: "Partnership",
    links: ["About Us", "Find store", "Categories", "Blogs"],
  },
  {
    heading: "Information",
    links: ["Help Center", "Money Refund", "Shipping", "Contact us"],
  },
  {
    heading: "For users",
    links: ["Login", "Register", "Settings", "My Orders"],
  },
];

const socials = [
  { icon: <FaFacebookF size={14} />, href: "#", label: "Facebook" },
  { icon: <FaTwitter size={14} />, href: "#", label: "Twitter" },
  { icon: <FaLinkedinIn size={14} />, href: "#", label: "LinkedIn" },
  { icon: <FaInstagram size={14} />, href: "#", label: "Instagram" },
  { icon: <FaYoutube size={14} />, href: "#", label: "YouTube" },
];

// ── Component ────────────────────────────────────────────────────────────────

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      {/* ── Newsletter ── */}
      <NewsLetter />

      {/* ── Main links ── */}
      <div className="bg-white border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {/* Brand column */}
            <div className="hidden md:flex col-span-2 sm:col-span-3 md:col-span-1 flex-col gap-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group w-fit">
                <div className="relative w-9 h-9 overflow-hidden rounded-lg shrink-0">
                  <Image
                    src="/assets/logo.jpg"
                    alt="Dees Mart logo"
                    width={36}
                    height={36}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="text-brand group-hover:text-blue-600 transition-colors duration-300">
                  Dees Mart
                </span>
              </Link>

              {/* Description */}
              <p className="text-caption max-w-[200px]">
                Everything you need, everywhere you go.
              </p>

              {/* Socials */}
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-7 h-7 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-500 flex items-center justify-center transition-all duration-200"
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {footerColumns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <h3 className="text-col-title">{col.heading}</h3>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-ui-muted hover:text-blue-600 transition-colors duration-200"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Get app column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-col-title">Get app</h3>
              <div className="flex flex-col gap-2">
                {/* App Store */}
                <Link
                  href="#"
                  className="flex items-center gap-2.5 bg-slate-900 hover:bg-slate-700 text-white rounded-lg px-3 py-2 transition-colors duration-200 w-fit"
                >
                  <FaApple size={20} />
                  <div className="flex flex-col leading-tight">
                    <span className="text-micro text-slate-300">
                      Download on the
                    </span>
                    <span className="text-xs sm:text-sm font-semibold">
                      App Store
                    </span>
                  </div>
                </Link>

                {/* Google Play */}
                <Link
                  href="#"
                  className="flex items-center gap-2.5 bg-slate-900 hover:bg-slate-700 text-white rounded-lg px-3 py-2 transition-colors duration-200 w-fit"
                >
                  <FaGooglePlay size={17} />
                  <div className="flex flex-col leading-tight">
                    <span className="text-micro text-slate-300">Get it on</span>
                    <span className="text-xs sm:text-sm font-semibold">
                      Google Play
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="bg-white border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <p className="text-ui-muted">
            © {new Date().getFullYear()} Dees Mart. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-ui-muted">
            <span>🇺🇸</span>
            <span>English | USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
