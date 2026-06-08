import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create Account | Dees Mart",
  description: "Create a free Dees Mart account and start shopping today.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-linear-210-to-br from-slate-50 via-blue-50/30 to-slate-100 py-12 px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1.5 w-full bg-linear-210-to-r from-blue-500 via-blue-600 to-indigo-600" />

          <div className="px-8 pt-8 pb-10">
            {/* Logo + heading */}
            <div className="flex flex-col items-center gap-3 mb-8">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-sm">
                  <Image
                    src={assets.brand.logo}
                    alt="Dees Mart logo"
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
                <span className="text-brand group-hover:text-blue-600 transition-colors duration-300">
                  Dees Mart
                </span>
              </Link>

              <div className="text-center mt-1">
                <h1 className="text-section-title">Create your account</h1>
                <p className="text-ui-muted mt-1">
                  Join thousands of happy shoppers
                </p>
              </div>
            </div>

            {/* The interactive form lives in a Client Component */}
            <RegisterForm />
          </div>
        </div>

        {/* Bottom caption */}
        <p className="text-caption text-center mt-6">
          © {new Date().getFullYear()} Dees Mart. All rights reserved.
        </p>
      </div>
    </div>
  );
}
