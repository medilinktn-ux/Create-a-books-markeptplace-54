import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">BookStore</h1>
      <button onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}