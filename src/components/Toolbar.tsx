"use client"

import React, { useState } from "react"
import { List, MoreVert, NavArrowDown, Settings, ViewGrid } from "iconoir-react"

import { SegmentedButton, SegmentedRoot } from "@/shared/ui/SegmentedButton"
import FilterChip from "@/shared/ui/chips/FilterChip"

import { cn } from "@/lib/cn"
import IconButton from "@/shared/ui/IconButton"

const Toolbar = ({ className }: { className?: string }) => {
  const [board, setBoard] = useState(false)
  const [team, setTeam] = useState(false)
  const [tag, setTag] = useState(false)
  const [sort, setSort] = useState(false)

  return (
    <div
      className={cn(
        "flex justify-between items-center rounded-xl py-3 px-4 bg-light-surfaceContainerLow dark:bg-dark-surfaceContainerLow",
        className
      )}
    >
      <SegmentedRoot type="single" defaultValue="grid">
        <SegmentedButton
          value="grid"
          icon={<ViewGrid width={18} height={18} />}
        >
          Grid
        </SegmentedButton>
        <SegmentedButton value="list" icon={<List width={18} height={18} />}>
          List
        </SegmentedButton>
      </SegmentedRoot>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <FilterChip
            appearance="outlined"
            trailingIcon={<NavArrowDown width={18} height={18} />}
            pressed={board}
            onPressedChange={setBoard}
          >
            Board: Projects
          </FilterChip>
          <FilterChip
            appearance="outlined"
            trailingIcon={<NavArrowDown width={18} height={18} />}
            pressed={team}
            onPressedChange={setTeam}
          >
            Team: Dev Team
          </FilterChip>
          <FilterChip
            appearance="outlined"
            trailingIcon={<NavArrowDown width={18} height={18} />}
            pressed={tag}
            onPressedChange={setTag}
          >
            Tag: Any
          </FilterChip>
          <FilterChip
            appearance="outlined"
            trailingIcon={<NavArrowDown width={18} height={18} />}
            pressed={sort}
            onPressedChange={setSort}
          >
            Sort by
          </FilterChip>
        </div>
        <IconButton appearance="outlined" icon={<Settings />} />
      </div>
    </div>
  )
}

export default Toolbar
