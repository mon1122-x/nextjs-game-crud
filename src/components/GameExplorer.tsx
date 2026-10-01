"use client";

import { useState } from "react";
import { initialGames, Game } from "@/data/games";
import GameCard from "@/components/GameCard";

export default function GameExplorer() {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [hours, setHours] = useState("");
  const [status, setStatus] = useState<Game["status"]>("ยังไม่เริ่ม");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setGames(games.filter((g) => g.id !== id));
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
        games.map((g) =>
          g.id === editingId
            ? { ...g, title, platform: platform || "PC", hours: Number(hours) || 10, status }
            : g
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
            <GameCard 
              key={game.id} 
              game={game} 
              onDelete={handleDelete} 
              onEdit={handleStartEdit} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-stone-500">ไม่พบเกมที่ค้นหา</div>
      )}

      <div className="bg-stone-900/60 border border-stone-800/80 rounded-xl p-6 shadow-xl max-w-xl space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-stone-100">
            {editingId !== null ? "แก้ไขข้อมูลเกม" : "เพิ่มเกมใหม่"}
          </h2>
          {editingId !== null && (
            <button 
              type="button" 
              onClick={handleCancelEdit}
              className="text-xs text-stone-400 hover:text-stone-200 underline"
            >
              ยกเลิก
            </button>
          )}
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4">
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

          {editingId !== null && (
            <div>
              <label className="block text-xs text-stone-400 mb-1">สถานะ</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as Game["status"])}
                className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2 text-stone-100 text-sm focus:outline-none focus:border-emerald-500"
              >
                <option value="ยังไม่เริ่ม">ยังไม่เริ่ม</option>
                <option value="กำลังเล่น">กำลังเล่น</option>
                <option value="เล่นจบแล้ว">เล่นจบแล้ว</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-semibold py-2 rounded-lg text-sm transition"
          >
            {editingId !== null ? "บันทึกการแก้ไข" : "บันทึกเกม"}
          </button>
        </form>
      </div>
    </div>
  );
}