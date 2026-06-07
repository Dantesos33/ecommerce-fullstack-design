"use client";

import Link from "next/link";
import { FaUser } from "react-icons/fa";

const UserActionCard = () => {
  return (
    <div className="rounded-lg bg-[#E3F0FF] border border-blue-100 p-4 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center shrink-0"
          aria-hidden
        >
          <FaUser size={18} className="text-slate-400" />
        </div>
        <p className="text-ui font-medium text-slate-800 leading-snug">
          Hi, user
          <br />
          let&apos;s get started
        </p>
      </div>

      <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
        <Link
          href="/register"
          className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-200"
        >
          Join now
        </Link>
        <Link
          href="/signin"
          className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-white hover:bg-slate-50 text-blue-600 text-sm font-medium rounded-md border border-blue-200 transition-colors duration-200"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default UserActionCard;
