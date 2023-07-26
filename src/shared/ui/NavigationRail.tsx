import React from "react"
import Link from "next/link"

import UIStateLayer from "./UIStateLayer"

import Label from "../typography/Label"

import { cn } from "@/lib/cn"

const NavigationRail = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <nav
      className={cn(
        "flex flex-col items-center gap-3 min-w-[80px] px-3 bg-light-surface dark:bg-dark-surface",
        className
      )}
    >
      {children}
    </nav>
  )
}

const NavigationRailItem = ({
  href,
  label,
  isActive,
  children,
}: {
  href: string
  label: string
  isActive: boolean
  children: React.ReactNode
}) => {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center gap-1 rounded-md outline-offset-4"
    >
      <div
        className={cn(
          "rounded-full",
          isActive &&
            "bg-light-secondaryContainer dark:bg-dark-secondaryContainer"
        )}
      >
        <UIStateLayer
          className={cn(
            "py-1 px-4 rounded-full",
            isActive
              ? "bg-light-onSurface dark:bg-dark-onSurface text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer"
              : "bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
          )}
        >
          {children}
        </UIStateLayer>
      </div>
      <Label
        className={cn(
          isActive
            ? "text-light-onSurface dark:text-dark-onSurface"
            : "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
        )}
      >
        {label}
      </Label>
    </Link>
  )
}

export { NavigationRail, NavigationRailItem }
