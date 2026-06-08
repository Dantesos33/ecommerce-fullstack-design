"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaUser,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaUserCircle,
  FaChevronDown,
  FaBoxOpen,
  FaHeart,
} from "react-icons/fa";
import axiosInstance from "@/lib/axiosInstance";

export default function ProfileDropdown() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Avoid SSR mismatch – read localStorage only after mount
  useEffect(() => {
    setMounted(true);
    setIsLoggedIn(!!localStorage.getItem("access_token"));
  }, []);

  // Re-check auth state whenever a login/logout fires the custom event
  useEffect(() => {
    const syncAuth = () =>
      setIsLoggedIn(!!localStorage.getItem("access_token"));
    window.addEventListener("auth-change", syncAuth);
    return () => window.removeEventListener("auth-change", syncAuth);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !containerRef.current?.contains(target) &&
        !(e.target as Element).closest?.("[data-profile-menu]")
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Position the portal-rendered menu under the trigger button
  useLayoutEffect(() => {
    if (!open || !triggerRef.current) return;

    const update = () => {
      const rect = triggerRef.current!.getBoundingClientRect();
      const menuWidth = 200;
      setMenuPosition({
        top: rect.bottom + 8,
        left: Math.max(8, rect.right - menuWidth),
      });
    };

    update();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [open]);

  const handleLogout = async () => {
    setOpen(false);
    try {
      await axiosInstance.post("/logout");
    } catch {
      // silently ignore — token may already be invalid
    } finally {
      localStorage.removeItem("access_token");
      setIsLoggedIn(false);
      router.push("/login");
    }
  };

  // ── Logged-in menu ──────────────────────────────────────────────────
  const loggedInMenu = (
    <div
      data-profile-menu
      className="outline-none fixed w-52 rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/60 py-2 z-[200] overflow-hidden"
      style={{ top: menuPosition.top, left: menuPosition.left }}
    >
      {/* Header strip */}
      <div className="px-4 py-2 mb-1 border-b border-slate-100">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
          My Account
        </p>
      </div>

      <Link
        href="/profile"
        onClick={() => setOpen(false)}
        className="flex items-center gap-3 px-4 py-2.5 text-ui text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
      >
        <FaUserCircle size={15} className="shrink-0 text-slate-400" />
        Profile
      </Link>

      <Link
        href="/orders"
        onClick={() => setOpen(false)}
        className="flex items-center gap-3 px-4 py-2.5 text-ui text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
      >
        <FaBoxOpen size={15} className="shrink-0 text-slate-400" />
        My Orders
      </Link>

      <Link
        href="/wishlist"
        onClick={() => setOpen(false)}
        className="flex items-center gap-3 px-4 py-2.5 text-ui text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
      >
        <FaHeart size={15} className="shrink-0 text-slate-400" />
        Wishlist
      </Link>

      {/* Divider + Logout */}
      <div className="my-1 border-t border-slate-100" />
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-ui text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 cursor-pointer"
      >
        <FaSignOutAlt size={15} className="shrink-0" />
        Sign out
      </button>
    </div>
  );

  // ── Logged-out menu ─────────────────────────────────────────────────
  const loggedOutMenu = (
    <div
      data-profile-menu
      className="outline-none fixed w-52 rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/60 py-2 z-[200] overflow-hidden"
      style={{ top: menuPosition.top, left: menuPosition.left }}
    >
      <div className="px-4 py-2 mb-1 border-b border-slate-100">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
          Account
        </p>
      </div>

      <Link
        href="/login"
        onClick={() => setOpen(false)}
        className="flex items-center gap-3 px-4 py-2.5 text-ui text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
      >
        <FaSignInAlt size={15} className="shrink-0 text-slate-400" />
        Sign in
      </Link>

      <Link
        href="/register"
        onClick={() => setOpen(false)}
        className="flex items-center gap-3 px-4 py-2.5 text-ui text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
      >
        <FaUserPlus size={15} className="shrink-0 text-slate-400" />
        Create account
      </Link>
    </div>
  );

  // Don't render until client has mounted (avoids hydration mismatch)
  if (!mounted) {
    return (
      <div className="flex flex-col items-center gap-1.5 text-slate-600 opacity-0 pointer-events-none">
        <div className="p-2 rounded-xl">
          <FaUser size={18} />
        </div>
        <div className="text-caption md:text-ui font-medium hidden md:block">
          Profile
        </div>
      </div>
    );
  }

  return (
    <div className="relative shrink-0" ref={containerRef}>
      {/* Trigger – mirrors NavItem visual style */}
      <button
        ref={triggerRef}
        type="button"
        id="profile-dropdown-trigger"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="outline-none flex flex-col items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 group cursor-pointer"
      >
        <div className="p-2 rounded-xl group-hover:bg-blue-50 transition-colors duration-300 relative">
          <FaUser size={18} />
          {/* Online indicator dot when logged in */}
          {isLoggedIn && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white" />
          )}
        </div>
        <div className="text-caption md:text-ui font-medium hidden md:flex items-center gap-1">
          {isLoggedIn ? "Account" : "Sign in"}
          <FaChevronDown
            size={10}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {/* Portal-rendered dropdown menu */}
      {open &&
        typeof document !== "undefined" &&
        createPortal(isLoggedIn ? loggedInMenu : loggedOutMenu, document.body)}
    </div>
  );
}
