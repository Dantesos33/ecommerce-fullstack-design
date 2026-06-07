"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "@/data/nav-data";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="text-slate-800">
        <HiMenu size={22} />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-col-title">Menu</h2>

          <button onClick={() => setOpen(false)}>
            <HiX size={22} />
          </button>
        </div>

        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="py-3 text-ui border-b border-slate-100"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
