"use client";

import { useState } from "react";
import { courses as initialCourses } from "@/data/courses";
import CoursesCard from "@/components/CoursesCard";
import CourseForm from "@/components/CourseForm";

export default function CourseExplorer() {
  const [courseList, setCourseList] = useState(initialCourses);
  const [searchQuery, setSearchQuery] = useState("");

  // กรองรายวิชาตามชื่อหรือรหัสวิชา
  const filteredCourses = courseList.filter(
    (course: any) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ฟังก์ชันเพิ่มรายวิชาใหม่
  const handleAddCourse = (newCourse: any) => {
    setCourseList([newCourse, ...courseList]);
  };

  // ฟังก์ชันลบรายวิชา
  const handleDeleteCourse = (id: number) => {
    setCourseList(courseList.filter((course) => course.id !== id));
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-white mb-2">รายวิชาทั้งหมด</h1>
        <p className="text-stone-400">ค้นหา แก้ไข และจัดการรายวิชาที่เปิดสอนได้ในที่เดียว</p>
      </div>

      {/* ช่องค้นหา - ใช้สไตล์กล่องสีเทาเข้มขอบมนแบบหน้าเกม */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-[#211f1c] p-4 rounded-xl border border-[#36322d] shadow-lg">
        <input
          type="text"
          placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-2/3 px-4 py-2 rounded-lg bg-[#141210] border border-[#36322d] text-stone-100 focus:outline-none focus:border-amber-500"
        />
        <span className="text-sm text-stone-400">
          พบ <strong className="text-amber-400">{filteredCourses.length}</strong> จาก {courseList.length} รายวิชา
        </span>
      </div>

      {/* แสดงรายการการ์ดรายวิชา - ใช้การ์ดสีเทาเข้มแบบหน้าเกม */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course: any) => (
            <div key={course.id} className="relative bg-[#211f1c] rounded-xl border border-[#36322d] p-6 shadow-lg">
              <CoursesCard course={course} />
              <button 
                onClick={() => handleDeleteCourse(course.id)}
                className="absolute top-4 right-4 text-rose-400 hover:text-rose-300 text-xs font-medium"
              >
                ลบ
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-stone-500 text-lg">
          ไม่พบรายวิชาที่ค้นหา
        </div>
      )}

      {/* ฟอร์มเพิ่มรายวิชาใหม่ */}
      <div className="mt-8">
        <CourseForm onAddCourse={handleAddCourse} />
      </div>
    </div>
  );
}