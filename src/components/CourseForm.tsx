"use client";

import { useState, useEffect } from "react";
import { Course } from "@/data/courses";

interface CourseFormProps {
  onSave: (courseData: { title: string; code: string; credits: number; description: string }) => void;
  editingCourse?: Course | null;
  onCancelEdit?: () => void;
}

export default function CourseForm({ onSave, editingCourse, onCancelEdit }: CourseFormProps) {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [credits, setCredits] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingCourse) {
      setTitle(editingCourse.title);
      setCode(editingCourse.code);
      setCredits(editingCourse.credits.toString());
      setDescription(editingCourse.description);
    } else {
      setTitle("");
      setCode("");
      setCredits("");
      setDescription("");
    }
  }, [editingCourse]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !code) return;

    onSave({
      title,
      code,
      credits: Number(credits) || 3,
      description,
    });

    setTitle("");
    setCode("");
    setCredits("");
    setDescription("");
  };

  return (
    <div className="bg-[#111827] p-6 rounded-xl border border-[#1f2937] shadow-lg max-w-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-slate-100">
          {editingCourse ? "แก้ไขข้อมูลรายวิชา" : "เพิ่มรายวิชาใหม่"}
        </h2>
        {editingCourse && onCancelEdit && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer"
          >
            ยกเลิกการแก้ไข
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">รหัสวิชา</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="เช่น CS101"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#030712] border border-[#1f2937] text-slate-100 focus:outline-none focus:border-emerald-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">หน่วยกิต</label>
            <input
              type="number"
              value={credits}
              onChange={(e) => setCredits(e.target.value)}
              placeholder="เช่น 3"
              className="w-full px-4 py-2 rounded-lg bg-[#030712] border border-[#1f2937] text-slate-100 focus:outline-none focus:border-emerald-500 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-1">ชื่อวิชา</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="ชื่อรายวิชา..."
            required
            className="w-full px-4 py-2 rounded-lg bg-[#030712] border border-[#1f2937] text-slate-100 focus:outline-none focus:border-emerald-500 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-1">คำอธิบายรายวิชา</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="รายละเอียดเกี่ยวกับวิชานี้..."
            rows={3}
            className="w-full px-4 py-2 rounded-lg bg-[#030712] border border-[#1f2937] text-slate-100 focus:outline-none focus:border-emerald-500 text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-semibold py-2 rounded-lg text-sm transition cursor-pointer"
        >
          {editingCourse ? "บันทึกการแก้ไข" : "บันทึกรายวิชา"}
        </button>
      </form>
    </div>
  );
}