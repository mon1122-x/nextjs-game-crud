import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1c1917] text-stone-100 pb-16">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-stone-900/60 border border-stone-800/80 rounded-2xl p-8 md:p-12 shadow-xl space-y-6">
          
          <h1 className="text-3xl md:text-4xl font-bold text-stone-100 tracking-tight">
            เกี่ยวกับโปรเจกต์
          </h1>
          
          <p className="text-stone-300 leading-relaxed text-base md:text-lg">
            เว็บไซต์นี้พัฒนาขึ้นเพื่อเป็นส่วนหนึ่งของการเรียนรู้และฝึกปฏิบัติการพัฒนาเว็บแอปพลิเคชันสมัยใหม่ 
            โดยใช้ <span className="text-emerald-400 font-semibold">Next.js</span> และ <span className="text-emerald-400 font-semibold">TypeScript</span> 
            ร่วมกับการจัดหน้าด้วย <span className="text-emerald-400 font-semibold">Tailwind CSS</span> 
            เพื่อเน้นความรวดเร็ว สวยงาม และรองรับการใช้งานทุกขนาดหน้าจอ
          </p>

          <div className="border-t border-stone-800 pt-6 space-y-3">
            <h2 className="text-xl font-semibold text-stone-200">คุณสมบัติหลักของระบบ</h2>
            <ul className="list-disc list-inside text-stone-400 space-y-2 text-sm md:text-base">
              <li>ระบบจัดการและค้นหารายวิชา (เพิ่ม ลบ และค้นหาข้อมูล)</li>
              <li>ระบบแสดงข้อมูลวงดนตรีและรายการโปรด</li>
              <li>โครงสร้าง Component แบบแยกส่วน ทำให้ดูแลง่ายและกลับมาใช้ซ้ำได้</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}