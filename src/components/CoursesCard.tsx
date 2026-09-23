export default function CoursesCard({ course }: { course: any }) {
  // รองรับทั้งฟิลด์ credit และ credits
  const creditValue = course.credit !== undefined ? course.credit : course.credits;

  return (
    <div className="text-stone-100">
      <div className="inline-block px-2.5 py-1 mb-3 text-xs font-semibold bg-amber-950/60 text-amber-400 rounded-md border border-amber-800/50">
        {course.code}
      </div>
      <h2 className="text-xl font-bold mb-2 text-stone-100 font-serif">
        {course.title}
      </h2>
      <p className="text-sm text-stone-300 mb-1">
        {creditValue !== undefined ? `${creditValue} หน่วยกิต` : "3 หน่วยกิต"}
      </p>
      <p className="text-sm text-stone-400 mb-4">
        ผู้สอน: {course.instructor || "อาจารย์ผู้สอนรายวิชา"}
      </p>
    </div>
  );
}