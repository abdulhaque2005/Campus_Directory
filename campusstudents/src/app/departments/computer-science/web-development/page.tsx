import Link from "next/link";
import students from "@/data/students";

const specializationStudents = [
  { id: "STU-1042", specialization: "Full-Stack Architecture" },
  { id: "STU-1155", specialization: "Reactive UI Design" },
  { id: "STU-1310", specialization: "Distributed Web Systems" },
  { id: "STU-1388", specialization: "Progressive Web Apps" },
];

export default function WebDevelopmentPage() {
  const studentDetails = specializationStudents
    .map((item) => ({
      ...item,
      student: students.find((student) => student.id === item.id),
    }))
    .filter((item) => item.student);

  return (
    <main className="min-h-screen bg-[#faf9ff] text-gray-900">
      <div className="mx-auto max-w-5xl px-5 py-5 sm:px-8">
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
          <Link href="/departments" className="hover:text-blue-700">
            Departments
          </Link>
          <span>/</span>
          <Link
            href="/departments/computer-science"
            className="hover:text-blue-700"
          >
            Computer Science
          </Link>
          <span>/</span>
          <span className="font-medium text-gray-900">
            Web Development
          </span>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-b border-[#dedfeb] pb-3">
          <Link
            href="/departments/computer-science"
            className="text-xs text-blue-700 hover:underline"
          >
            ← Return to Computer Science Department
          </Link>

          <Link
            href="/students"
            className="text-xs text-slate-600 hover:text-blue-700"
          >
            View all students →
          </Link>
        </div>

        <section className="mt-4 border border-[#d1d5e5] bg-white p-4 sm:p-5">
          <div className="flex flex-col justify-between gap-5 sm:flex-row">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-semibold tracking-tight">
                  Web Development
                </h1>
                <span className="border border-[#d5d9e8] bg-indigo-50 px-1.5 py-0.5 text-[9px] text-slate-600">
                  Specialization under Computer Science
                </span>
              </div>

              <p className="mt-2 max-w-xl text-xs leading-5 text-slate-600">
                Focusing on modern frontend architectures, full-stack
                frameworks, reactive interfaces, and distributed web APIs.
              </p>
            </div>

            <div className="shrink-0 sm:text-right">
              <p className="text-[9px] font-medium uppercase tracking-wider text-slate-500">
                Department Track
              </p>
              <span className="mt-1 inline-block border border-[#d5d9e8] bg-[#faf9ff] px-2 py-1 text-[10px] font-medium">
                CS-SPEC-04
              </span>
            </div>
          </div>

          <hr className="my-4 border-[#e5e7ef]" />

          <div className="grid grid-cols-2 gap-4 text-[10px] sm:grid-cols-4">
            <div>
              <p className="text-slate-500">Academic Lead</p>
              <p className="mt-1 font-medium">Prof. Elena Vance</p>
            </div>

            <div>
              <p className="text-slate-500">Primary Core Lab</p>
              <p className="mt-1 font-medium">Turing Hall 408</p>
            </div>

            <div>
              <p className="text-slate-500">Total Enrollment</p>
              <p className="mt-1 font-medium">
                {studentDetails.length} Active Enrollees
              </p>
            </div>

            <div>
              <p className="text-slate-500">Curriculum Cycle</p>
              <p className="mt-1 font-medium">2024–2025 Revised</p>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#dedfeb] pb-2">
            <h2 className="text-xs font-semibold">
              Students in this Specialization
              <span className="ml-2 inline-flex h-4 min-w-4 items-center justify-center bg-indigo-100 px-1 text-[9px] text-blue-800">
                {studentDetails.length}
              </span>
            </h2>

            <p className="text-[10px] text-slate-500">
              Filtered by Track:
              <span className="ml-2 border border-[#d5d9e8] bg-indigo-50 px-2 py-1 text-[9px] text-gray-700">
                Web Development
              </span>
            </p>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {studentDetails.map(({ id, specialization, student }) => {
              if (!student) return null;

              const initials = student.name
                .trim()
                .split(/\s+/)
                .map((word) => word[0])
                .slice(0, 2)
                .join("")
                .toUpperCase();

              return (
                <article
                  key={id}
                  className="border border-[#d5d8e6] bg-white p-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-[10px] font-semibold text-blue-700">
                        {initials}
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-[11px] font-medium">
                          {student.name}
                        </h3>
                        <p className="text-[9px] text-slate-500">
                          {student.id}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 border border-[#d5d9e8] bg-[#faf9ff] px-1.5 py-0.5 text-[9px] text-slate-600">
                      Year {student.year}
                    </span>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between gap-3 border-t border-[#e5e7ef] pt-2.5">
                    <p className="text-[9px] text-slate-600">
                      {specialization}
                    </p>

                    <Link
                      href={`/students/${student.id}`}
                      className="shrink-0 text-[10px] text-blue-700 hover:underline"
                    >
                      View profile →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      <footer className="mt-12 border-t border-[#dedfeb] bg-white">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 px-5 py-3 text-[9px] text-slate-500 sm:flex-row sm:px-8">
          <p>Campus Directory © Academic Informatics Core</p>

          <p className="flex items-center gap-3">
            Path: /departments/computer-science/web-development
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </p>
        </div>
      </footer>
    </main>
  );
}