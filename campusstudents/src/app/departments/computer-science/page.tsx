import Link from "next/link";

const specializations = [
  {
    id: "CS-SPEC-04",
    name: "Web Development",
    description:
      "Modern frontend architectures, full-stack frameworks, and distributed web APIs.",
    students: 4,
    href: "/departments/computer-science/web-development",
  },
  {
    id: "CS-SPEC-02",
    name: "Artificial Intelligence",
    description:
      "Machine learning, neural networks, and intelligent applications.",
    students: 12,
    href: "/students?department=Computer%20Science",
  },
  {
    id: "CS-SPEC-03",
    name: "Data Structures & Algorithms",
    description:
      "Algorithms, computational problem solving, and software efficiency.",
    students: 18,
    href: "/students?department=Computer%20Science",
  },
  {
    id: "CS-SPEC-01",
    name: "Systems Engineering",
    description:
      "Operating systems, computer architecture, and infrastructure.",
    students: 10,
    href: "/students?department=Computer%20Science",
  },
];

export default function ComputerSciencePage() {
  return (
    <main className="min-h-screen bg-[#faf9ff] px-5 py-8 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/departments" className="hover:text-blue-700">
            Departments
          </Link>
          <span>/</span>
          <span className="font-medium text-gray-900">
            Computer Science
          </span>
        </div>

        <header className="flex flex-col justify-between gap-4 border-b border-[#d5d8e6] pb-5 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-semibold">
              Computer Science
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
            Explore software engineering, artificial intelligence,
            algorithms, and computer systems through focused academic
            specializations.
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
                    {item.students} Enrolled Students
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="shrink-0 text-xs font-medium text-blue-700 hover:underline"
                >
                  View specialization →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-5 border-t border-[#d5d8e6] pt-4 text-xs text-slate-500">
          Campus Directory © Academic Informatics Core
        </footer>
      </div>
    </main>
  );
}
