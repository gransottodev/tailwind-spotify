import {Home, Search, Library} from 'lucide-react'

export default function Sidebar(){
  return(
    <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Home />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-10 pt-6 border-t border-zinc-700 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot hits summer</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My playlist #12</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">SummerHits 2023</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Internacional 2010</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Code best #01</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Notion</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Khalid</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Arctic Monkeys</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">David Guetta</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Avicci</a>
          </nav>


        </aside>
  )
}