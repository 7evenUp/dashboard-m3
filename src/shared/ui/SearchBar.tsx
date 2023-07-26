import React from "react"
import { Search } from "iconoir-react"

const SearchBar = () => {
  return (
    <label className="flex items-center gap-4 rounded-full min-w-[360px] h-14 px-4 bg-light-surfaceContainerHigh dark:bg-dark-surfaceContainerHigh">
      <Search className="text-light-onSurface dark:text-dark-onSurface" />

      <input
        className="text-base tracking-[0.5px] text-light-onSurface bg-transparent dark:text-dark-onSurface placeholder:text-light-onSurfaceVariant dark:placeholder:text-dark-onSurfaceVariant outline-none"
        placeholder="Search Items"
      />
    </label>
  )
}

export default SearchBar
