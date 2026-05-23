"use client";

import React from "react";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <div className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center text-center gap-5">
        <div>
          <h2 className="text-section-title">Subscribe on our newsletter</h2>
          <p className="text-ui-muted mt-1 max-w-md">
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
              className="flex-1 px-3 h-11 outline-none text-ui placeholder:text-slate-400 bg-transparent"
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
  );
};

export default NewsLetter;
