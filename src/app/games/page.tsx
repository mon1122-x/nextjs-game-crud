"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import { initialGames } from "@/data/games";

export default function GamesPage() {
  const [games, setGames] = useState(initialGames);
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [hours, setHours] = useState("");
  const [status, setStatus] = useState("ยังไม่เริ่ม");

  const handleAddGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !platform) return;

    const newGame = {
      id: Date.now(),
      title,
      platform,
      hours: Number(hours) || 0,
      status,
    };

    setGames([newGame, ...games]);
    setTitle("");
    setPlatform("");
    setHours("");
    setStatus("ยังไม่เริ่ม");
  };

  const handleDeleteGame = (id: number) => {
    setGames(games.filter((game) => game.id !== id));
  };

  return (
    <main className="min-h-screen bg-[#1c1917] text-stone-100 pb-16">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* แสดงรายการเกมด้านบน */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {games.map((game) => (
            <GameCard key={game.id} game={game} onDelete={handleDeleteGame} />
          ))}
        </div>

        {/* ฟอร์มเพิ่มเกมใหม่ด้านล่าง */}
        <div className="bg-[#211f1c] p-6 rounded-xl border border-[#36322d] shadow-lg mt-8">
          <h2 className="text-2xl font-bold text-stone-100 mb-6">เพิ่มเกมใหม่</h2>
          
          <form onSubmit={handleAddGame} className="space-y-4">
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

            <button
              type="submit"
              className="px-6 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors cursor-pointer"
            >
              บันทึก
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}