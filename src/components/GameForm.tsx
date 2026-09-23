"use client";

import { useState } from "react";

export default function GameForm({ onAddGame }: { onAddGame: (game: any) => void }) {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [hours, setHours] = useState("");
  const [status, setStatus] = useState("ยังไม่เริ่ม");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !platform) return;

    const newGame = {
      id: Date.now(),
      title,
      platform,
      hours: Number(hours) || 0,
      status,
    };

    onAddGame(newGame);

    // รีเซ็ตฟอร์ม
    setTitle("");
    setPlatform("");
    setHours("");
    setStatus("ยังไม่เริ่ม");
  };

  return (
    <div className="bg-[#211f1c] p-6 rounded-xl border border-[#36322d] shadow-lg mt-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-stone-100 mb-6">เพิ่มเกมใหม่</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ชื่อเกม */}
        <div>
          <label className="block text-sm text-stone-300 mb-1">ชื่อเกม</label>
          <input
            type="text"
            placeholder="ชื่อเกม..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#141210] border border-[#36322d] text-stone-100 focus:outline-none focus:border-amber-500"
            required
          />
        </div>

        {/* แพลตฟอร์ม (Dropdown) */}
        <div>
          <label className="block text-sm text-stone-300 mb-1">แพลตฟอร์ม</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#141210] border border-[#36322d] text-stone-100 focus:outline-none focus:border-amber-500"
            required
          >
            <option value="" disabled>-- เลือกแพลตฟอร์ม --</option>
            <option value="PC">PC</option>
            <option value="PlayStation 5">PlayStation 5</option>
            <option value="Xbox Series X">Xbox Series X</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>

        {/* จำนวนชั่วโมงที่คาดว่าจะใช้เล่น */}
        <div>
          <label className="block text-sm text-stone-300 mb-1">จำนวนชั่วโมงที่คาดว่าจะใช้เล่น</label>
          <input
            type="number"
            placeholder="จำนวนชั่วโมง"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#141210] border border-[#36322d] text-stone-100 focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* สถานะ (Dropdown) */}
        <div>
          <label className="block text-sm text-stone-300 mb-1">สถานะ</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#141210] border border-[#36322d] text-stone-100 focus:outline-none focus:border-amber-500"
          >
            <option value="ยังไม่เริ่ม">ยังไม่เริ่ม</option>
            <option value="กำลังเล่น">กำลังเล่น</option>
            <option value="เล่นจบแล้ว">เล่นจบแล้ว</option>
          </select>
        </div>

        {/* ปุ่มบันทึก */}
        <button
          type="submit"
          className="px-6 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors cursor-pointer"
        >
          บันทึกเกม
        </button>
      </form>
    </div>
  );
}