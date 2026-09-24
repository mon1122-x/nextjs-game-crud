import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#111827] border border-[#1f2937] p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-slate-100 mb-6">เกี่ยวกับโปรเจกต์</h1>
          <p className="text-slate-300 leading-relaxed mb-4">
            เว็บไซต์นี้พัฒนาขึ้นเพื่อเป็นส่วนหนึ่งของการเรียนรู้และฝึกปฏิบัติการพัฒนาเว็บแอปพลิเคชันสมัยใหม่ โดยใช้ Next.js และ TypeScript ร่วมกับการจัดหน้าด้วย Tailwind CSS เพื่อเน้นความรวดเร็ว สวยงาม และรองรับการใช้งานทุกขนาดหน้าจอ
          </p>
          <h2 className="text-xl font-semibold text-slate-200 mt-6 mb-3">คุณสมบัติหลักของระบบ</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>ระบบจัดการและค้นหารายวิชา (เพิ่ม ลบ และค้นหาข้อมูล)</li>
            <li>ระบบแสดงข้อมูลวงดนตรีและรายการโปรด</li>
            <li>โครงสร้าง Component แบบแยกส่วน ทำให้ดูแลง่ายและกลับมาใช้ซ้ำได้</li>
          </ul>
        </div>
      </div>
    </main>
  );
}