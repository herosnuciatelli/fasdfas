'use client'

import { usePathname } from "next/navigation"

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className="flex justify-between items-center text-xs py-3">
      <nav>
        <ul className="flex gap-3">
          <li className="font-medium hover:opacity-80 transition-all"><a href="/">Home</a></li>
          <li className="font-medium hover:opacity-80 transition-all"><a href="/marketplace">Marketplace</a></li>
        </ul>
      </nav>
      <a href="/create-comment">
        <button className="bg-purple-900 rounded-md border border-purple-500 text-xs font-semibold px-3 py-1.5">
          Comment
        </button>
      </a>
    </header>
  )
}