export interface Student {
  id: string;
  name: string;
  email: string;
  department: string;
  departmentId?: string;
  specialization?: string;
  year: number;
  gpa?: number;
  advisor?: string;
  bio?: string;
}

export default Student;