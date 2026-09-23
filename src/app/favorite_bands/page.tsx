import Navbar from "@/components/Navbar";
import BandExplorer from "@/components/BandExplorer";

export default function FavoriteBandsPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 pb-16">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <BandExplorer />
      </div>
    </main>
  );
}