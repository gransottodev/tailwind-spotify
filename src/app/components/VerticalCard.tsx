import Image from "next/image"
import album from '../../../public/album.jpg'

export default function VerticalCard(props : any) {
  return (
    <a href="" className="bg-white/5 hover:bg-white/10 rounded-md p-2 flex flex-col gap-4 w-full">
      <Image src={album} width={130} alt="Capa album black in black acdc" />
      <strong className="font-semibold">Daily mix {props.value}</strong>
      <span className="text-sm text-zinc-400">ACDC, Guns N' Roses, Capital Inicial</span>
    </a>
  )
}