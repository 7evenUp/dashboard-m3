"use client"

import { useTheme } from "next-themes"

const ThemeToggle = () => {
  const { setTheme } = useTheme()
  return (
    <div className="flex gap-2">
      <button
        className="bg-slate-400 py-2 px-4 rounded-md text-light-onSurface dark:text-dark-onSurface"
        type="button"
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        className="bg-slate-400 py-2 px-4 rounded-md text-light-onSurface dark:text-dark-onSurface"
        type="button"
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
    </div>
  )
}

export default ThemeToggle