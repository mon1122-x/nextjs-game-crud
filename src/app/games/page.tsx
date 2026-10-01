"use client";

import { useState } from "react";
import { initialGames, Game } from "@/data/games";
import GameCard from "@/components/GameCard";
import GameForm from "@/components/GameForm";
import Navbar from "@/components/Navbar";

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [editingGame, setEditingGame] = useState<Game | null>(null);

  const handleDeleteGame = (id: number) => {
    setGames(games.filter((game) => game.id !== id));
    if (editingGame?.id === id) {
      setEditingGame(null);
    }
  };

  const handleStartEdit = (game: Game) => {
    setEditingGame(game);
  };

  const handleSaveGame = (gameData: { title: string; platform: string; hours: number; status: Game["status"] }) => {
    if (editingGame) {
      setGames(
        games.map((game) =>
          game.id === editingGame.id
            ? { ...game, ...gameData }
            : game
        )
      );
      setEditingGame(null);
    } else {
      const newGame: Game = {
        id: Date.now(),
        ...gameData,
      };
      setGames([newGame, ...games]);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 pb-16">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        
        {/* แสดงรายการเกม */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard 
              key={game.id} 
              game={game} 
              onDelete={handleDeleteGame} 
              onEdit={handleStartEdit} 
            />
          ))}
        </div>

        {/* ฟอร์มเพิ่ม/แก้ไขเกม */}
        <GameForm 
          onSaveGame={handleSaveGame} 
          editingGame={editingGame} 
          onCancelEdit={() => setEditingGame(null)} 
        />

      </div>
    </main>
  );
}