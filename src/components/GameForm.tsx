"use client";

import { useState, useEffect } from "react";
import { Game } from "@/data/games";

interface GameFormProps {
  onSaveGame: (gameData: { title: string; platform: string; hours: number; status: Game["status"] }) => void;
  editingGame?: Game | null;
  onCancelEdit?: () => void;
}

export default function GameForm({ onSaveGame, editingGame, onCancelEdit }: GameFormProps) {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [hours, setHours] = useState("");
  const [status, setStatus] = useState<Game["status"]>("ยังไม่เริ่ม");

  useEffect(() => {
    if (editingGame) {
      setTitle(editingGame.title);
      setPlatform(editingGame.platform);
      setHours(editingGame.hours.toString());
      setStatus(editingGame.status);
    } else {
      setTitle("");
      setPlatform("");
      setHours("");
      setStatus("ยังไม่เริ่ม");
    }
  }, [editingGame]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    onSaveGame({
      title,
      platform: platform || "PC",
      hours: Number(hours) || 10,
      status,
    });

    setTitle("");
    setPlatform("");
    setHours("");
    setStatus("ยังไม่เริ่ม");
  };

  return (
    <div className="bg-[#111827] p-6 rounded-xl border border-[#1f2937] shadow-lg max-w-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-slate-100">
          {editingGame ? "แก้ไขข้อมูลเกม" : "เพิ่มเกมใหม่"}
        </h2>
        {editingGame && onCancelEdit && (
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
        <div>
          <label className="block text-sm text-slate-300 mb-1">ชื่อเกม</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="ชื่อเกม..."
            required
            className="w-full px-4 py-2 rounded-lg bg-[#030712] border border-[#1f2937] text-slate-100 focus:outline-none focus:border-emerald-500 text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">แพลตฟอร์ม</label>
            <input
              type="text"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              placeholder="PC, Switch..."
              className="w-full px-4 py-2 rounded-lg bg-[#030712] border border-[#1f2937] text-slate-100 focus:outline-none focus:border-emerald-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">ชั่วโมงที่คาดว่าจะใช้</label>
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="จำนวนชั่วโมง"
              className="w-full px-4 py-2 rounded-lg bg-[#030712] border border-[#1f2937] text-slate-100 focus:outline-none focus:border-emerald-500 text-sm"
            />
          </div>
        </div>

        {editingGame && (
          <div>
            <label className="block text-sm text-slate-300 mb-1">สถานะ</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as Game["status"])}
              className="w-full px-4 py-2 rounded-lg bg-[#030712] border border-[#1f2937] text-slate-100 focus:outline-none focus:border-emerald-500 text-sm"
            >
              <option value="ยังไม่เริ่ม">ยังไม่เริ่ม</option>
              <option value="กำลังเล่น">กำลังเล่น</option>
              <option value="เล่นจบแล้ว">เล่นจบแล้ว</option>
            </select>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-semibold py-2 rounded-lg text-sm transition cursor-pointer"
        >
          {editingGame ? "บันทึกการแก้ไข" : "บันทึกเกม"}
        </button>
      </form>
    </div>
  );
}