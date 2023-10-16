import React from "react"
import { Search } from "iconoir-react"

const SearchBar = () => {
  return (
    <label className="flex items-center gap-4 rounded-full min-w-[360px] h-14 px-4 bg-surfaceContainerHigh">
      <Search className="text-onSurface" />

      <input
        className="text-base tracking-[0.5px] text-onSurface bg-transparent placeholder:text-onSurfaceVariant outline-none"
        placeholder="Search Items"
      />
    </label>
  )
}

export default SearchBar
