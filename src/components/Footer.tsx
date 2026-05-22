"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaApple,
  FaEnvelope,
} from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import Image from "next/image";

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
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="w-full mt-auto">
      {/* ── Newsletter ── */}
      <div className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center text-center gap-5">
          <div>
            <h2 className="text-lg font-bold text-slate-800">
              Subscribe on our newsletter
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-md">
              Get daily news on upcoming offers from many suppliers all over the
              world
            </p>
          </div>

          {/* Mobile: stacked. sm+: inline row */}
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-md gap-2 sm:gap-0 sm:rounded-lg sm:overflow-hidden sm:border sm:border-slate-200 sm:bg-white sm:shadow-sm sm:focus-within:border-blue-400 sm:focus-within:shadow-md transition-all duration-300"
          >
            {/* Input row */}
            <div className="flex items-center flex-1 h-11 rounded-lg sm:rounded-none border border-slate-200 sm:border-0 bg-white px-0 overflow-hidden">
              <span className="pl-4 text-slate-400 shrink-0">
                <FaEnvelope size={15} />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 px-3 h-full outline-none text-sm text-slate-700 placeholder:text-slate-400 bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer h-11 px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold rounded-lg sm:rounded-none transition-colors duration-200 shrink-0 w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

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
                <span className="text-xl font-black text-slate-800 group-hover:text-blue-600 tracking-tight transition-colors duration-300">
                  Dees Mart
                </span>
              </Link>

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
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
                <h3 className="text-sm font-semibold text-slate-800">
                  {col.heading}
                </h3>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200"
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
              <h3 className="text-sm font-semibold text-slate-800">Get app</h3>
              <div className="flex flex-col gap-2">
                {/* App Store */}
                <Link
                  href="#"
                  className="flex items-center gap-2.5 bg-slate-900 hover:bg-slate-700 text-white rounded-lg px-3 py-2 transition-colors duration-200 w-fit"
                >
                  <FaApple size={20} />
                  <div className="flex flex-col leading-tight">
                    <span className="text-[9px] text-slate-300 uppercase tracking-wide">
                      Download on the
                    </span>
                    <span className="text-xs font-semibold">App Store</span>
                  </div>
                </Link>

                {/* Google Play */}
                <Link
                  href="#"
                  className="flex items-center gap-2.5 bg-slate-900 hover:bg-slate-700 text-white rounded-lg px-3 py-2 transition-colors duration-200 w-fit"
                >
                  <FaGooglePlay size={17} />
                  <div className="flex flex-col leading-tight">
                    <span className="text-[9px] text-slate-300 uppercase tracking-wide">
                      Get it on
                    </span>
                    <span className="text-xs font-semibold">Google Play</span>
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
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Dees Mart. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>🇺🇸</span>
            <span>English | USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
