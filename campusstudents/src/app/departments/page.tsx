import Link from "next/link";
import { Terminal, Palette, TrendingUp, Users, Shapes, ArrowRight } from "lucide-react";
import departments from "@/data/departments";

const icons = {
  terminal: Terminal,
  palette: Palette,
  "trending-up": TrendingUp,
};

export default function DepartmentsPage() {
  return (
    <main className="min-h-screen bg-[#faf9ff] px-5 py-8">
      <div className="mx-auto max-w-3xl">
        <header className="flex flex-col justify-between gap-4 border-b border-[#d6d8e5] pb-4 sm:flex-row sm:items-start">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
              Departments
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Explore academic faculties, programs, and enrolled students.
            </p>
          </div>

          <div className="flex items-center gap-1.5 pt-2 text-xs text-slate-600">
            <span className="h-2 w-2 rounded-full bg-blue-700" />
            {departments.length} Active Academic Faculties
          </div>
        </header>

        <section className="mt-5 overflow-hidden rounded border border-[#d1d5e5] bg-white">
          {departments.map((department) => {
            const Icon =
              icons[department.icon as keyof typeof icons] || Terminal;

            return (
              <article
                key={department.id}
                className="border-b border-[#d1d5e5] p-4 last:border-b-0 sm:p-5 transition hover:bg-slate-50/50"
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-indigo-50 text-blue-700">
                        <Icon size={16} strokeWidth={2.5} />
                      </span>

                      <Link
                        href={`/departments/${department.id}`}
                        className="text-sm font-semibold text-gray-900 hover:text-blue-700 transition"
                      >
                        {department.name}
                      </Link>
                    </div>

                    <p className="mt-2 text-sm leading-5 text-slate-600">
                      {department.description}
                    </p>

                    <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-slate-600">
                      <span className="flex items-center gap-1">
                        <Shapes size={13} />
                        {department.specializations?.length || department.specializationsCount} Specializations
                      </span>

                      <span className="hidden text-slate-300 sm:inline">
                        ·
                      </span>

                      <span className="flex items-center gap-1">
                        <Users size={13} />
                        {department.enrolledStudents} Enrolled Students
                      </span>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    <Link
                      href={`/departments/${department.id}`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 hover:text-blue-900 hover:underline"
                    >
                      View department
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <footer className="mt-4 flex flex-col justify-between gap-2 text-[10px] font-medium text-slate-500 sm:flex-row sm:items-center">
          <p>Curriculum Year 2024–2025</p>
          <p>Updated daily via Campus Records API</p>
        </footer>
      </div>
    </main>
  );
}
