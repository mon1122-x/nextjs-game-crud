"use client";

import { useState } from "react";
import FavoriteBandCard from "@/components/favorite_band";
import { favorite_band_data } from "@/data/favorite_band_data";

export default function CourseExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [followedBands, setFollowedBands] = useState<{ [key: string]: boolean }>({});
  const [likes, setLikes] = useState<{ [key: string]: number }>({});

  const toggleFollow = (bandName: string) => {
    setFollowedBands((prev) => ({
      ...prev,
      [bandName]: !prev[bandName],
    }));
  };

  const handleLike = (bandName: string) => {
    setLikes((prev) => ({
      ...prev,
      [bandName]: (prev[bandName] || 0) + 1,
    }));
  };

  const handleReset = () => {
    setSearchQuery("");
    setFollowedBands({});
    setLikes({});
  };

  const filteredBands = favorite_band_data.filter((band) =>
    band.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalFollowed = Object.values(followedBands).filter(Boolean).length;
  const totalLikes = Object.values(likes).reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
        <div className="flex w-full md:w-1/2 gap-2">
          <input
            type="text"
            placeholder="ค้นหาชื่อวงดนตรี..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
          >
            ล้างค่า
          </button>
        </div>

        <div className="flex gap-6 text-sm text-slate-300">
          <span>กำลังติดตาม: <strong className="text-blue-400">{totalFollowed}</strong> วง</span>
          <span>ถูกใจรวม: <strong className="text-pink-400">{totalLikes}</strong> ครั้ง</span>
        </div>
      </div>

      {filteredBands.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBands.map((band, index) => {
            const isFollowed = followedBands[band.name] || false;
            const likeCount = likes[band.name] || 0;

            return (
              <div key={index} className="flex flex-col bg-slate-800 rounded-xl overflow-hidden border border-slate-700 p-4 justify-between">
                <FavoriteBandCard band={band} />
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-700">
                  <button
                    onClick={() => toggleFollow(band.name)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      isFollowed 
                        ? "bg-rose-600 hover:bg-rose-700 text-white" 
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    {isFollowed ? "เลิกติดตาม" : "ติดตาม"}
                  </button>

                  <button
                    onClick={() => handleLike(band.name)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm text-pink-400 font-medium transition-colors"
                  >
                    ❤️ Like ({likeCount})
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 text-slate-400 text-lg">
          ไม่พบวงดนตรีตรงตามเงื่อนไข (Empty State)
        </div>
      )}
    </div>
  );
}