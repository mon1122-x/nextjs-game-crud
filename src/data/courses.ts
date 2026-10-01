export interface Course {
  id: number;
  title: string;
  code: string;
  credits: number;
  isOpen?: boolean;
  description?: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    code: "CS101",
    credits: 3,
    isOpen: true,
    description: "พื้นฐานวิทยาการคอมพิวเตอร์และหลักการเขียนโปรแกรม",
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    code: "CS201",
    credits: 3,
    isOpen: true,
    description: "โครงสร้างข้อมูลและอัลกอริทึม",
  },
];