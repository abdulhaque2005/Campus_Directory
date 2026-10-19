import Link from "next/link";
import departments from "@/data/departments";
import students from "@/data/students";

const values = [
  {
    number: "01",
    title: "Student First",
    description:
      "Make student information easy to discover, understand, and access through a simple interface.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Academic Discovery",
    description:
      "Explore departments, specializations, and the academic opportunities available on campus.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Connected Campus",
    description:
      "Bring student profiles and academic information together in one organized directory.",
    icon: "↗",
  },
];

const features = [
  {
    title: "Student Directory",
    description:
      "Browse student profiles and quickly find essential academic details.",
    href: "/students",
    number: "01",
  },
  {
    title: "Academic Departments",
    description:
      "Discover departments, specializations, and enrolled students.",
    href: "/departments",
    number: "02",
  },
  {
    title: "Student Profiles",
    description:
      "View individual student information through dedicated profile pages.",
    href: "/students",
    number: "03",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf9ff] text-gray-900">
      <section className="border-b border-[#e0e2ed]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-8 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-gray-900">About</span>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                About Campus Directory
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                One campus.
                <br />
                <span className="text-blue-700">Endless connections.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                Campus Directory is a centralized place to explore
                student profiles, discover academic departments, and
                navigate the academic community with ease.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/students"
                  className="rounded-md bg-blue-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-800"
                >
                  Explore Students →
                </Link>

                <Link
                  href="/departments"
                  className="rounded-md border border-[#d5d8e6] bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  View Departments
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-blue-100/70 blur-2xl" />

              <div className="relative rounded-2xl border border-[#d8daea] bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-700">
                    ⌂
                  </div>

                  <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[10px] font-medium text-emerald-700">
                    Directory Overview
                  </span>
                </div>

                <h2 className="mt-6 text-xl font-semibold">
                  Your academic community
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Explore the people, programs, and departments
                  that make up your campus.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-[#e3e5ef] bg-[#faf9ff] p-4">
                    <p className="text-xs text-slate-500">Departments</p>
                    <p className="mt-2 text-3xl font-semibold text-blue-700">
                      {departments.length.toString().padStart(2, "0")}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#e3e5ef] bg-[#faf9ff] p-4">
                    <p className="text-xs text-slate-500">Demo Profiles</p>
                    <p className="mt-2 text-3xl font-semibold text-blue-700">
                      {students.length.toString().padStart(2, "0")}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-lg bg-blue-50 p-3">
                  <span className="text-xl text-blue-700">✦</span>
                  <p className="text-xs leading-5 text-slate-600">
                    A simpler way to navigate your campus directory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Our Mission
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Making campus information more accessible.
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Finding the right academic information should not be
            complicated. Campus Directory brings student records,
            departments, and specialization details into a clear,
            organized experience designed to make navigation easier.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="rounded-xl border border-[#d8daea] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-2xl text-blue-700">
                  {value.icon}
                </span>

                <span className="text-xs font-medium text-slate-400">
                  {value.number}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e0e2ed] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                What You Can Explore
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
                Everything in one place.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Navigate directly to the sections that matter to your academic journey.
            </p>
          </div>

          <div className="mt-8 divide-y divide-[#e2e4ee] border-y border-[#e2e4ee]">
            {features.map((feature) => (
              <Link
                key={feature.number}
                href={feature.href}
                className="group flex items-center justify-between gap-5 py-6 transition"
              >
                <div className="flex items-start gap-4">
                  <span className="pt-1 text-xs font-medium text-blue-700">
                    {feature.number}
                  </span>

                  <div>
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-700">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <span className="shrink-0 text-xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl bg-blue-700 px-6 py-10 text-white sm:px-10 sm:py-12">
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to explore your campus?
              </h2>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Discover students and academic departments
                through the Campus Directory.
              </p>
            </div>

            <Link
              href="/students"
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e0e2ed] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Campus Directory</p>
          <p>Connecting students and academic communities.</p>
        </div>
      </footer>
    </main>
  );
}
