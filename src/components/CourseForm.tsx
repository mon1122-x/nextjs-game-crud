"use client";

import { useState } from "react";

export default function CourseForm({ onAddCourse }: { onAddCourse: (course: any) => void }) {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [credit, setCredit] = useState("");
  const [instructor, setInstructor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code || !title) return;

    const newCourse = {
      id: Date.now(),
      code: code.toUpperCase(),
      title,
      credit: Number(credit) || 3,
      instructor: instructor || "อาจารย์ผู้สอนรายวิชา",
    };

    onAddCourse(newCourse);

    // รีเซ็ตฟอร์ม
    setCode("");
    setTitle("");
    setCredit("");
    setInstructor("");
  };

  return (
    <div className="bg-[#211f1c] p-6 rounded-xl border border-[#36322d] shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-stone-100 mb-6">เพิ่มรายวิชาใหม่</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* รหัสวิชา */}
        <div>
          <label className="block text-sm text-stone-300 mb-1">รหัสวิชา</label>
          <input
            type="text"
            placeholder="เช่น CS101"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#141210] border border-[#36322d] text-stone-100 focus:outline-none focus:border-amber-500"
            required
          />
        </div>

        {/* ชื่อวิชา */}
        <div>
          <label className="block text-sm text-stone-300 mb-1">ชื่อวิชา</label>
          <input
            type="text"
            placeholder="เช่น Introduction to Computer Science"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#141210] border border-[#36322d] text-stone-100 focus:outline-none focus:border-amber-500"
            required
          />
        </div>

        {/* จำนวนหน่วยกิต */}
        <div>
          <label className="block text-sm text-stone-300 mb-1">จำนวนหน่วยกิต</label>
          <input
            type="number"
            placeholder="เช่น 3"
            value={credit}
            onChange={(e) => setCredit(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#141210] border border-[#36322d] text-stone-100 focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* ผู้สอน */}
        <div>
          <label className="block text-sm text-stone-300 mb-1">ผู้สอน</label>
          <input
            type="text"
            placeholder="ชื่ออาจารย์ผู้สอน"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#141210] border border-[#36322d] text-stone-100 focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* ปุ่มบันทึก */}
        <button
          type="submit"
          className="px-6 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors cursor-pointer"
        >
          บันทึก
        </button>
      </form>
    </div>
  );
}