import Link from "next/link";
import departments from "@/data/departments";
import students from "@/data/students";

const features = [
  {
    title: "Students",
    description: "Browse student profiles, departments, and academic information.",
    href: "/students",
    icon: "👨‍🎓",
    label: "Browse students",
  },
  {
    title: "Departments",
    description: "Explore academic faculties, programs, and specializations.",
    href: "/departments",
    icon: "🏛️",
    label: "Explore departments",
  },
  {
    title: "About Campus",
    description: "Learn more about our campus directory and academic community.",
    href: "/about",
    icon: "🎓",
    label: "Learn more",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#faf9ff] text-gray-900">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to{" "}
            <span className="text-blue-700">Campus Directory</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Discover students, explore academic departments, and
            find the information you need—all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/students"
              className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-800"
            >
              Browse Students <span>→</span>
            </Link>

            <Link
              href="/departments"
              className="rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Explore Departments
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-[#d8d9e7] bg-white p-6 shadow-xs">
            <p className="text-sm text-slate-500">Academic Departments</p>
            <h2 className="mt-2 text-3xl font-semibold">{departments.length}</h2>
            <p className="mt-2 text-xs text-slate-500">Explore academic faculties</p>
          </div>

          <div className="rounded-lg border border-[#d8d9e7] bg-white p-6 shadow-xs">
            <p className="text-sm text-slate-500">Student Profiles</p>
            <h2 className="mt-2 text-3xl font-semibold">{students.length}</h2>
            <p className="mt-2 text-xs text-slate-500">Browse verified student records</p>
          </div>

          <div className="rounded-lg border border-[#d8d9e7] bg-white p-6 shadow-xs">
            <p className="text-sm text-slate-500">Campus Resources</p>
            <h2 className="mt-2 text-3xl font-semibold">3</h2>
            <p className="mt-2 text-xs text-slate-500">Access directory sections</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-7">
          <h2 className="text-2xl font-semibold tracking-tight">
            Explore Campus Directory
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Everything you need to navigate your academic community.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.href}
              className="rounded-lg border border-[#d8d9e7] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-2xl">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>

              <Link
                href={feature.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline"
              >
                {feature.label} <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#d8d9e7] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-6 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Campus Directory</p>
          <p>Connecting students and academic communities.</p>
        </div>
      </footer>
    </main>
  );
}
