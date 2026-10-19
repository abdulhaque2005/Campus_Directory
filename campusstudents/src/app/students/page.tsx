"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import students from "@/data/students";

function StudentsContent() {
  const searchParams = useSearchParams();
  const initialDept = searchParams.get("department") || "all";

  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState(initialDept);

  const departmentsList = useMemo(() => {
    return Array.from(new Set(students.map((i) => i.department)));
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter((i) => {
      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        i.name.toLowerCase().includes(q) ||
        i.id.toLowerCase().includes(q) ||
        i.department.toLowerCase().includes(q);

      const matchesDept =
        selectedDept === "all" ||
        i.department.toLowerCase() === selectedDept.toLowerCase();

      return matchesSearch && matchesDept;
    });
  }, [search, selectedDept]);

  return (
    <main className="min-h-screen bg-[#faf9ff] px-6 py-8 md:px-12 text-gray-900">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 rounded-sm border border-[#d5d7e5] bg-white p-2 sm:flex-row sm:items-center">
        <div className="relative w-full sm:w-1/2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search students"
            className="w-full rounded-sm border border-gray-300 py-2 pl-9 pr-3 text-xs text-gray-700 outline-none transition focus:border-blue-400 focus:ring-1 focus:ring-blue-100"
          />

          <svg
            className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path strokeLinecap="round" d="m16 16 4 4" />
          </svg>
        </div>

        <div className="flex w-full items-center justify-between gap-3 sm:w-auto">
          <label htmlFor="department" className="text-xs text-gray-600">
            Department:
          </label>

          <select
            id="department"
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="min-w-40 cursor-pointer rounded-sm border border-gray-300 bg-white px-2 py-2 text-xs text-gray-700 outline-none focus:border-blue-400"
          >
            <option value="all">All departments</option>
            {departmentsList.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Students</h1>
        <p className="mt-1 text-sm text-gray-500">
          Browse students and view their profiles.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredStudents.map((i) => {
          const initials = i.name
            .trim()
            .split(/\s+/)
            .map((word) => word[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();

          const yearLabel =
            i.year === 1
              ? "1st"
              : i.year === 2
              ? "2nd"
              : i.year === 3
              ? "3rd"
              : `${i.year}th`;

          return (
            <div
              key={i.id}
              className="rounded-sm border border-[#d5d7e5] bg-white p-3"
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-xs font-medium text-blue-800">
                  {initials}
                </div>

                <span className="rounded-sm border border-gray-200 bg-gray-100 px-1 text-[9px] text-gray-500">
                  {i.id}
                </span>
              </div>

              <h2 className="text-sm font-medium text-gray-900">{i.name}</h2>

              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="border border-blue-100 bg-blue-50 px-1.5 py-0.5 text-[10px] text-blue-700">
                  {i.department}
                </span>

                <p className="text-[11px] text-gray-500">
                  {yearLabel} Year
                </p>
              </div>

              <hr className="my-3 border-gray-200" />

              <Link
                href={`/students/${i.id}`}
                className="inline-flex items-center gap-1 text-[11px] text-blue-600 hover:text-blue-800 hover:underline"
              >
                View profile <span>→</span>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[#d5d7e5] pt-4">
        <p className="text-xs text-gray-500">
          Showing {filteredStudents.length} of {students.length} students
        </p>

        <div className="flex gap-2">
          <button
            disabled
            className="cursor-not-allowed border border-gray-200 bg-white px-3 py-1 text-xs text-gray-400"
          >
            Previous
          </button>
          <button className="cursor-pointer border border-gray-300 bg-white px-3 py-1 text-xs text-gray-600 hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </main>
  );
}

export default function StudentsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf9ff] p-8 text-xs text-gray-500">
          Loading students...
        </div>
      }
    >
      <StudentsContent />
    </Suspense>
  );
}
