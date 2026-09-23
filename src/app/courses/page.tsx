import Navbar from "@/components/Navbar";
import CourseExplorer from "@/components/CourseExplorer"; // เปลี่ยนมาเรียก CourseExplorer แทน CourseList

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#1c1917] text-stone-100 pb-16">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <CourseExplorer /> {/* เปลี่ยนตรงนี้ด้วย */}
      </div>
    </main>
  );
}