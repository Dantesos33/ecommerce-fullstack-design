"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-blue-800 hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
