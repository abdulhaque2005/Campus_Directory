export interface Specialization {
  id: string;
  name: string;
  slug: string;
  description: string;
  leadFaculty?: string;
  lab?: string;
  studentCount: number;
  skills?: string[];
}

export interface Department {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  specializationsCount: number;
  enrolledStudents: number;
  icon: "terminal" | "palette" | "trending-up" | "cpu" | "book-open" | "globe";
  headOfDepartment?: string;
  building?: string;
  established?: number;
  contactEmail?: string;
  specializations?: Specialization[];
}

export default Department;