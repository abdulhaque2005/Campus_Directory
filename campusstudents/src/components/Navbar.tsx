"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/students", label: "Students" },
    { href: "/departments", label: "Departments" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="w-full border-b border-[#e5e7ef] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <div className="flex items-center gap-9">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight text-gray-900 hover:text-blue-600 transition duration-150"
          >
            Campus Directory
          </Link>

          <div className="hidden sm:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition duration-150 pb-1 border-b-2 ${
                    isActive
                      ? "text-blue-600 font-bold border-amber-400"
                      : "text-gray-700 hover:text-blue-600 border-transparent hover:border-gray-200"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden sm:flex items-center">
          <button
            type="button"
            className="rounded border border-gray-300 bg-white px-3.5 py-1.5 text-xs font-medium text-gray-700 shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px,rgb(209,213,219)_0px_0px_0px_1px_inset] transition hover:bg-gray-50 active:bg-gray-100 cursor-pointer"
          >
            Frontend Practice
          </button>
        </div>

        <div className="flex sm:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded px-2.5 py-1 text-xs font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#e5e7ef] bg-white px-6 py-3 sm:hidden">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm py-1 transition ${
                    isActive
                      ? "font-bold text-blue-600 border-b-2 border-amber-400 w-fit"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-gray-100">
              <button
                type="button"
                className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px,rgb(209,213,219)_0px_0px_0px_1px_inset]"
              >
                Frontend Practice
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
