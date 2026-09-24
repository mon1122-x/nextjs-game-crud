"use client";

import Navbar from "@/components/Navbar";
import CourseExplorer from "@/components/CourseExplorer";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 pb-16">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* คอมโพเนนต์หลักที่จัดการทั้งแสดง ค้นหา และเพิ่มรายวิชา */}
        <CourseExplorer />

      </div>
    </main>
  );
}