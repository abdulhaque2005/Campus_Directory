
import Link from 'next/link';
import { notFound } from 'next/navigation';
import students from '@/data/datas';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function StudentsProfile({ params }: Props) {
  const { id } = await params;

  const student = students.find((i) => i.id === id);

  if (!student) {
    notFound();
  }

  const initials = student.name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      <Link
        href="/students"
        className="text-sm text-blue-600 hover:underline"
      >
        ← Back to Students
      </Link>

      <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-semibold text-blue-700">
            {initials}
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {student.name}
            </h1>
            <p className="text-sm text-gray-500">{student.id}</p>
          </div>
        </div>

        <hr className="my-6" />

        <h2 className="mb-4 text-lg font-semibold">
          Student Information
        </h2>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium">{student.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Student ID</p>
            <p className="font-medium">{student.id}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Department</p>
            <p className="font-medium">{student.department}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Academic Year</p>
            <p className="font-medium">{student.year} Year</p>
          </div>

          {'email' in student && (
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{student.email}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
