export interface Game {
  id: number;
  title: string;
  platform: string;
  status: string;
  hours: number;
}

export const initialGames: Game[] = [
  { id: 1, title: "Resident Evil", platform: "PC", status: "กำลังเล่น", hours: 15 },
  { id: 2, title: "Hogwarts Legacy", platform: "PlayStation 5", status: "ยังไม่เริ่ม", hours: 40 },
  { id: 3, title: "GTA V", platform: "PC", status: "เล่นจบแล้ว", hours: 60 },
  { id: 4, title: "Pokémon", platform: "Nintendo Switch", status: "กำลังเล่น", hours: 35 },
  { id: 5, title: "Minecraft", platform: "PC", status: "เล่นจบแล้ว", hours: 120 },
];