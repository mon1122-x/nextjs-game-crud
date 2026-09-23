"use client";

export default function GameCard({ game, onDelete }: { game: any; onDelete: (id: number) => void }) {
  return (
    <div className="bg-stone-900/60 border border-stone-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <span className="px-2.5 py-0.5 bg-stone-800 text-stone-300 text-xs rounded-md border border-stone-700/50">
            {game.platform}
          </span>
          <span className="text-xs text-amber-500 font-medium bg-amber-500/10 px-2 py-0.5 rounded">
            {game.status}
          </span>
        </div>
        <h3 className="text-xl font-bold text-stone-100">{game.title}</h3>
        <p className="text-sm text-stone-400">คาดว่าจะใช้เวลา {game.hours} ชั่วโมง</p>
      </div>

      <div className="flex gap-3 text-xs pt-2">
        <button className="text-emerald-400 hover:underline">แก้ไข</button>
        <button 
          onClick={() => onDelete(game.id)}
          className="text-rose-400 hover:underline"
        >
          ลบ
        </button>
      </div>
    </div>
  );
}