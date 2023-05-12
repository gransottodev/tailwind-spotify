import { ChevronLeft, ChevronRight, Play, } from "lucide-react";
import album from '../../public/album.jpg'
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import HorizontalCard from "./components/HorizontalCard";
import VerticalCard from "./components/VerticalCard";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="bg-black/40 p-1 rounded-full hover:bg-black/60 ">
              <ChevronLeft />
            </button>
            <button className="bg-black/40 p-1 rounded-full hover:bg-black/60">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-4xl mt-8">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <HorizontalCard/>
            <HorizontalCard/>
            <HorizontalCard/>
            <HorizontalCard/>
            <HorizontalCard/>
            <HorizontalCard/>
          </div>

          <h2 className="font-semibold text-2xl mt-8">Made for Vitor Gabriel Gransotto</h2>

          <div className="grid grid-cols-8 mt-8 gap-4">
            <VerticalCard value={1}/>
            <VerticalCard value={2}/>
            <VerticalCard value={3}/>
            <VerticalCard value={4}/>
            <VerticalCard value={5}/>
            <VerticalCard value={6}/>
            <VerticalCard value={7}/>
            <VerticalCard value={8}/>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
