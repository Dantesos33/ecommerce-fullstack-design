"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Button from "@/components/Button";
import Input from "@/components/Input";
import axiosInstance from "@/lib/axiosInstance";

export default function RegisterForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const { data } = await axiosInstance.post("/register", {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });

      if (data.access_token) {
        localStorage.setItem("access_token", data.access_token);
        window.dispatchEvent(new Event("auth-change"));
      }

      router.push("/");
    } catch (err: unknown) {
      const fallback = "Registration failed. Please try again.";
      if (
        err &&
        typeof err === "object" &&
        "response" in err &&
        err.response &&
        typeof err.response === "object" &&
        "data" in err.response &&
        err.response.data &&
        typeof err.response.data === "object" &&
        "message" in err.response.data
      ) {
        setError(
          (err.response.data as { message: string }).message ?? fallback,
        );
      } else {
        setError(fallback);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Error banner */}
      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600 flex items-start gap-2">
          <span className="mt-0.5">⚠</span>
          <span>{error}</span>
        </div>
      )}

      {/* Full name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="register-name" className="text-ui font-medium">
          Full name
        </label>
        <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 hover:border-blue-400 focus-within:border-blue-500 focus-within:bg-white transition-all duration-300 overflow-hidden">
          <span className="pl-4 text-slate-400 shrink-0">
            <FaUser size={15} />
          </span>
          <Input
            id="register-name"
            name="name"
            type="text"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            className="bg-transparent"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="register-email" className="text-ui font-medium">
          Email address
        </label>
        <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 hover:border-blue-400 focus-within:border-blue-500 focus-within:bg-white transition-all duration-300 overflow-hidden">
          <span className="pl-4 text-slate-400 shrink-0">
            <FaEnvelope size={15} />
          </span>
          <Input
            id="register-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="bg-transparent"
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="register-password" className="text-ui font-medium">
          Password
        </label>
        <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 hover:border-blue-400 focus-within:border-blue-500 focus-within:bg-white transition-all duration-300 overflow-hidden">
          <span className="pl-4 text-slate-400 shrink-0">
            <FaLock size={15} />
          </span>
          <Input
            id="register-password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Min. 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            autoComplete="new-password"
            className="bg-transparent"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="pr-4 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
        </div>
      </div>

      {/* Confirm password */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="register-confirm" className="text-ui font-medium">
          Confirm password
        </label>
        <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 hover:border-blue-400 focus-within:border-blue-500 focus-within:bg-white transition-all duration-300 overflow-hidden">
          <span className="pl-4 text-slate-400 shrink-0">
            <FaLock size={15} />
          </span>
          <Input
            id="register-confirm"
            name="password_confirmation"
            type={showConfirm ? "text" : "password"}
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
            className="bg-transparent"
          />
          <button
            type="button"
            onClick={() => setShowConfirm((v) => !v)}
            className="pr-4 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            aria-label={showConfirm ? "Hide password" : "Show password"}
          >
            {showConfirm ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        disabled={loading}
        className="w-full justify-center py-3 rounded-xl text-base mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Creating account…
          </span>
        ) : (
          "Create account"
        )}
      </Button>

      {/* Terms notice */}
      <p className="text-caption text-center">
        By creating an account you agree to our{" "}
        <Link href="/terms" className="text-blue-600 hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      {/* Login redirect */}
      <p className="text-center text-ui-muted">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-600 font-medium hover:underline transition-colors"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}
