import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 pb-16">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 bg-[#111827] border border-[#1f2937] rounded-2xl p-8 md:p-12 shadow-xl">
          
          {/* กล่องตัวเลขสถิติทางซ้าย */}
          <div className="flex items-center gap-6">
            <span className="text-6xl md:text-8xl font-extrabold text-emerald-500 tracking-tight">
              4
            </span>
            <div className="text-slate-400 text-sm md:text-base font-medium leading-snug">
              รายวิชาที่เปิดสอน
            </div>
          </div>

          {/* ข้อมูลเนื้อหาทางขวา */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
              Next-js
            </h1>
            
            {/* สถานะระบบ */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm text-slate-300 font-medium">สถานะระบบ เปิดใช้งาน</span>
            </div>

            {/* ป้ายแท็กเทคโนโลยี */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-[#1f2937] border border-slate-700/60 text-slate-300 text-xs font-medium rounded-full">
                HTML
              </span>
              <span className="px-3 py-1 bg-[#1f2937] border border-slate-700/60 text-slate-300 text-xs font-medium rounded-full">
                CSS
              </span>
              <span className="px-3 py-1 bg-[#1f2937] border border-slate-700/60 text-slate-300 text-xs font-medium rounded-full">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-[#1f2937] border border-slate-700/60 text-slate-300 text-xs font-medium rounded-full">
                Next.js
              </span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}