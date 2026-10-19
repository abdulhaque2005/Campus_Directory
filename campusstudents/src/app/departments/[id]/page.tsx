import Link from "next/link";
import { notFound } from "next/navigation";
import defaultDepartments from "@/data/departments";
import students from "@/data/students";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function DepartmentDetailPage({ params }: Props) {
  const { id } = await params;

  const department = defaultDepartments.find(
    (d) => d.id.toLowerCase() === id.toLowerCase()
  );

  if (!department) {
    notFound();
  }

  const deptStudents = students.filter(
    (s) =>
      s.departmentId?.toLowerCase() === id.toLowerCase() ||
      s.department.toLowerCase() === department.name.toLowerCase()
  );

  const specializations = department.specializations || [];

  return (
    <main className="min-h-screen bg-[#faf9ff] px-5 py-8 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/departments" className="hover:text-blue-700">
            Departments
          </Link>
          <span>/</span>
          <span className="font-medium text-gray-900">
            {department.name}
          </span>
        </div>

        <header className="flex flex-col justify-between gap-4 border-b border-[#d5d8e6] pb-5 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-semibold">
              {department.name}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Explore specializations, programs, and enrolled students.
            </p>
          </div>

          <span className="text-xs text-slate-600">
            <span className="mr-1 text-blue-700">●</span>
            {specializations.length} Specializations
          </span>
        </header>

        <section className="mt-5 border border-[#d5d8e6] bg-white p-5">
          <h2 className="text-base font-semibold">
            About the Department
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {department.longDescription || department.description}
          </p>
        </section>

        <section className="mt-7">
          <h2 className="mb-3 text-lg font-semibold">
            Academic Specializations
          </h2>

          <div className="overflow-hidden border border-[#d5d8e6] bg-white">
            {specializations.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between gap-4 border-b border-[#d5d8e6] p-5 last:border-b-0 sm:flex-row sm:items-center"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-semibold">
                      {item.name}
                    </h3>
                    <span className="border border-[#d5d8e6] bg-indigo-50 px-2 py-0.5 text-[10px] text-slate-600">
                      {item.id}
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {item.description}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    {item.studentCount} Enrolled Students
                  </p>
                </div>

                <Link
                  href={`/students?department=${encodeURIComponent(department.name)}`}
                  className="shrink-0 text-xs font-medium text-blue-700 hover:underline"
                >
                  View students →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {deptStudents.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-3 text-lg font-semibold">
              Enrolled Students ({deptStudents.length})
            </h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {deptStudents.map((student) => {
                const initials = student.name
                  .trim()
                  .split(/\s+/)
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase();

                return (
                  <div
                    key={student.id}
                    className="rounded-sm border border-[#d5d7e5] bg-white p-3"
                  >
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-xs font-medium text-blue-800">
                        {initials}
                      </div>

                      <span className="rounded-sm border border-gray-200 bg-gray-100 px-1 text-[9px] text-gray-500">
                        {student.id}
                      </span>
                    </div>

                    <h3 className="text-sm font-medium text-gray-900">
                      {student.name}
                    </h3>

                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className="border border-blue-100 bg-blue-50 px-1.5 py-0.5 text-[10px] text-blue-700">
                        {student.department}
                      </span>
                      <p className="text-[11px] text-gray-500">
                        {student.year === 1
                          ? "1st"
                          : student.year === 2
                          ? "2nd"
                          : student.year === 3
                          ? "3rd"
                          : `${student.year}th`}{" "}
                        Year
                      </p>
                    </div>

                    <hr className="my-3 border-gray-200" />

                    <Link
                      href={`/students/${student.id}`}
                      className="inline-flex items-center gap-1 text-[11px] text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      View profile <span>→</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <footer className="mt-8 border-t border-[#d5d8e6] pt-4 text-xs text-slate-500">
          Campus Directory © Academic Informatics Core
        </footer>
      </div>
    </main>
  );
}
