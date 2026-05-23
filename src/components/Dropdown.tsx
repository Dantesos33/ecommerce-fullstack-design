"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

interface DropdownProps {
  label: string;
  items: {
    label: string;
    href: string;
  }[];
}

const Dropdown = ({ label, items }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(label);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedLabel(label);
  }, [label]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !containerRef.current?.contains(target) &&
        !(e.target as Element).closest?.("[data-dropdown-menu]")
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useLayoutEffect(() => {
    if (!open || !buttonRef.current) return;

    const updatePosition = () => {
      const rect = buttonRef.current!.getBoundingClientRect();
      const menuWidth = 192;
      setMenuPosition({
        top: rect.bottom + 8,
        left: Math.max(8, rect.right - menuWidth),
      });
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open]);

  const handleSelect = (itemLabel: string) => {
    setSelectedLabel(itemLabel);
    setOpen(false);
  };

  const menu =
    open &&
    typeof document !== "undefined" &&
    createPortal(
      <div
        data-dropdown-menu
        className="fixed w-48 rounded-lg border border-slate-200 bg-white shadow-lg py-2 z-[100]"
        style={{ top: menuPosition.top, left: menuPosition.left }}
      >
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block px-4 py-2 text-ui hover:bg-slate-100"
            onClick={() => handleSelect(item.label)}
          >
            {item.label}
          </Link>
        ))}
      </div>,
      document.body
    );

  return (
    <div className="relative shrink-0" ref={containerRef}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 text-ui hover:text-blue-600 transition-colors whitespace-nowrap"
      >
        {selectedLabel}
        <FaChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {menu}
    </div>
  );
};

export default Dropdown;
