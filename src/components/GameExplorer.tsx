"use client";

import { useState } from "react";
import { initialGames, Game } from "@/data/games";
import GameCard from "@/components/GameCard";

export default function GameExplorer() {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [hours, setHours] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setGames(games.filter((g) => g.id !== id));
  };

  const handleAddGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    const newGame: Game = {
      id: Date.now(),
      title,
      platform: platform || "PC",
      status: "ยังไม่เริ่ม",
      hours: Number(hours) || 10,
    };
    setGames([newGame, ...games]);
    setTitle("");
    setPlatform("");
    setHours("");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-stone-100 tracking-tight">Game Backlog</h1>
        <p className="text-stone-400 text-sm mt-1">บันทึกรายการเกมที่ตั้งใจจะเล่น พร้อมติดตามสถานะของแต่ละเกม</p>
        <p className="text-xs text-stone-500 mt-2">มีเกมอยู่ในลิสต์ทั้งหมด {filteredGames.length} จาก {games.length} เกม</p>
      </div>

      <div className="bg-stone-900/60 border border-stone-800/80 rounded-xl p-4">
        <input
          type="text"
          placeholder="ค้นหาชื่อเกม..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2 text-stone-100 text-sm focus:outline-none focus:border-emerald-500"
        />
      </div>

      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-stone-500">ไม่พบเกมที่ค้นหา</div>
      )}

      <div className="bg-stone-900/60 border border-stone-800/80 rounded-xl p-6 shadow-xl max-w-xl space-y-4">
        <h2 className="text-xl font-bold text-stone-100">เพิ่มเกมใหม่</h2>
        <form onSubmit={handleAddGame} className="space-y-4">
          <div>
            <label className="block text-xs text-stone-400 mb-1">ชื่อเกม</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="ชื่อเกม..."
              className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2 text-stone-100 text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-stone-400 mb-1">แพลตฟอร์ม</label>
              <input
                type="text"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                placeholder="PC, Switch..."
                className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2 text-stone-100 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs text-stone-400 mb-1">ชั่วโมงที่คาดว่าจะใช้</label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                placeholder="จำนวนชั่วโมง"
                className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2 text-stone-100 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-semibold py-2 rounded-lg text-sm transition"
          >
            บันทึกเกม
          </button>
        </form>
      </div>
    </div>
  );
}