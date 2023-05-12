import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Mic2,
  Rows,
  MonitorSpeaker,
  Volume1,
  Maximize2,
} from "lucide-react";
import album from "../../../public/album.jpg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={album} width={60} alt="Capa album black in black acdc" />
        <div className="flex flex-col gap-1">
          <strong className="font-regular">Back in Black</strong>
          <span className="text-xs text-zinc-400">ACDC</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-6 items-center">
          <Shuffle size={20} className="text-zinc-600" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="w-10 h-10 pl-1 flex items-center justify-center rounded-full bg-white text-black">
            <Play />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-600" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
          </div>
          <span className="text-sm text-zinc-400">2:30</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Mic2 size={20} className="text-zinc-300" />
        <Rows size={20} className="text-zinc-300" />
        <MonitorSpeaker size={20} className="text-zinc-300" />
        <Volume1 size={20} className="text-zinc-300" />
        <div className="h-1 rounded-full w-24 bg-zinc-600">
          <div className="bg-zinc-200 w-16 h-1 rounded-full"></div>
        </div>
        <Maximize2 size={20} className="text-zinc-300" />
      </div>
    </footer>
  );
}
