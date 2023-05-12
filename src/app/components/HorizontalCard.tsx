import { Play } from "lucide-react"
import Image from "next/image"
import album from '../../../public/album.jpg'


export default function HorizontalCard(){
  return(
    <a href="" className="bg-white/5 group hover:bg-white/10 transition-colors rounded flex items-center gap-4 overflow-hidden">
    <Image src={album} width={104} alt="Capa album black in black acdc" />
    <strong>Back in Black</strong>
    <button className="w-14 h-14 pl-1 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
      <Play />
    </button>
  </a>
  )
}