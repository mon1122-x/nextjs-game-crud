"use client";

import { useState } from "react";
import { initialGames, Game } from "@/data/games";
import GameCard from "@/components/GameCard";
import Navbar from "@/components/Navbar";

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [hours, setHours] = useState("");
  const [status, setStatus] = useState<Game["status"]>("ยังไม่เริ่ม");
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleDeleteGame = (id: number) => {
    setGames(games.filter((game) => game.id !== id));
    if (editingId === id) {
      handleCancelEdit();
    }
  };

  const handleStartEdit = (game: Game) => {
    setEditingId(game.id);
    setTitle(game.title);
    setPlatform(game.platform);
    setHours(game.hours.toString());
    setStatus(game.status);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setTitle("");
    setPlatform("");
    setHours("");
    setStatus("ยังไม่เริ่ม");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    if (editingId !== null) {
      setGames(
        games.map((game) =>
          game.id === editingId
            ? { ...game, title, platform: platform || "PC", hours: Number(hours) || 10, status }
            : game
        )
      );
    } else {
      const newGame: Game = {
        id: Date.now(),
        title,
        platform: platform || "PC",
        status: "ยังไม่เริ่ม",
        hours: Number(hours) || 10,
      };
      setGames([newGame, ...games]);
    }

    handleCancelEdit();
  };

  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 pb-16">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* แสดงรายการเกมด้านบน */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {games.map((game) => (
            <GameCard 
              key={game.id} 
              game={game} 
              onDelete={handleDeleteGame} 
              onEdit={handleStartEdit} 
            />
          ))}
        </div>

        {/* ฟอร์มเพิ่ม/แก้ไขเกมด้านล่าง */}
        <div className="bg-[#111827] p-6 rounded-xl border border-[#1f2937] shadow-lg max-w-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-100">
              {editingId !== null ? "แก้ไขข้อมูลเกม" : "เพิ่มเกมใหม่"}
            </h2>
            {editingId !== null && (
              <button 
                type="button" 
                onClick={handleCancelEdit}
                className="text-xs text-slate-400 hover:text-slate-200 underline"
              >
                ยกเลิกการแก้ไข
              </button>
            )}
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
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
                  placeholder="PC, PS5..."
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

            {editingId !== null && (
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
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-semibold py-2 rounded-lg text-sm transition"
            >
              {editingId !== null ? "บันทึกการแก้ไข" : "บันทึกเกม"}
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}