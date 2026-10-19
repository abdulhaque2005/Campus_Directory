"use client";

import Link from "next/link";
import { useState } from "react";

const destinations = [
  {
    title: "Students Directory",
    description: "Browse student profiles and academic details.",
    href: "/students",
    tag: "Directory",
  },
  {
    title: "Computer Science Department",
    description: "Explore Computer Science and its specializations.",
    href: "/departments/computer-science",
    tag: "Department",
  },
  {
    title: "All Departments",
    description: "Discover academic faculties and programs.",
    href: "/departments",
    tag: "Departments",
  },
  {
    title: "About Campus Directory",
    description: "Learn about the campus directory.",
    href: "/about",
    tag: "Information",
  },
];

export default function NotFound() {
  const [search, setSearch] = useState("");

  const filteredDestinations = destinations.filter((item) =>
    `${item.title} ${item.description} ${item.href}`
      .toLowerCase()
      .includes(search.toLowerCase().trim())
  );

  return (
    <main className="min-h-[calc(100vh-60px)] bg-[#faf9ff] px-5 py-10 text-gray-900 sm:py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <div className="flex items-center gap-2 rounded-full border border-[#d9dced] bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          404 · ROUTE NOT FOUND
        </div>

        <div className="mt-7 text-center">
          <div className="text-7xl font-bold tracking-tight text-blue-700 sm:text-8xl">
            404
          </div>

          <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Student or department not found
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
            The requested directory entry or path could not be located.
            It may have moved, or the identifier might be invalid.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/students"
            className="rounded-md bg-blue-700 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Return to Students Directory
          </Link>

          <Link
            href="/departments"
            className="rounded-md border border-[#cfd4e4] bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Browse All Departments
          </Link>
        </div>

        <section className="mt-10 w-full">
          <label
            htmlFor="route-search"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Find your way
          </label>

          <div className="flex items-center gap-3 rounded-lg border border-[#d5d8e6] bg-white px-3 py-2.5 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5 shrink-0 text-slate-400"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m16 16 4 4" />
            </svg>

            <input
              id="route-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search students, departments, or pages..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="shrink-0 cursor-pointer text-xs text-blue-700 hover:underline"
              >
                Clear
              </button>
            )}
          </div>
        </section>

        <section className="mt-5 w-full overflow-hidden rounded-lg border border-[#d5d8e6] bg-white">
          <div className="flex items-center justify-between border-b border-[#d5d8e6] bg-[#f7f6ff] px-4 py-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              Suggested starting points
            </h2>

            <span className="text-[10px] text-slate-500">
              {filteredDestinations.length} routes
            </span>
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="divide-y divide-[#e6e7ef]">
              {filteredDestinations.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between gap-4 px-4 py-4 transition hover:bg-blue-50"
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-blue-700">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-5 w-5"
                      >
                        {item.tag === "Directory" ? (
                          <>
                            <circle cx="9" cy="8" r="3" />
                            <path d="M3 20v-2a6 6 0 0 1 12 0v2" />
                            <path d="M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2" />
                          </>
                        ) : item.tag === "Department" ||
                          item.tag === "Departments" ? (
                          <>
                            <rect x="4" y="3" width="16" height="18" rx="1" />
                            <path d="M9 7h2m2 0h2M9 11h2m2 0h2M9 15h2m2 0h2M10 21v-3h4v3" />
                          </>
                        ) : (
                          <>
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 11v5m0-8h.01" />
                          </>
                        )}
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-700">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>

                      <span className="mt-1 inline-block text-[10px] text-slate-400">
                        {item.href}
                      </span>
                    </div>
                  </div>

                  <span className="shrink-0 text-lg text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700">
                    →
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-10 text-center">
              <p className="text-sm font-medium text-gray-800">
                No matching pages found
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Try searching for students, departments, or about.
              </p>
              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-4 cursor-pointer text-sm font-medium text-blue-700 hover:underline"
              >
                Show all destinations
              </button>
            </div>
          )}
        </section>

        <Link
          href="/"
          className="mt-6 text-sm text-slate-500 transition hover:text-blue-700 hover:underline"
        >
          ← Back to Campus Directory Home
        </Link>

        <p className="mt-8 text-center text-[10px] text-slate-400">
          Campus Directory · Academic Information Portal
        </p>
      </div>
    </main>
  );
}
