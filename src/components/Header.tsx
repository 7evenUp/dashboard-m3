import React from "react"
import Image from "next/image"

import ThemeToggle from "./ThemeToggle"
import AppIcon from "./AppIcon"

import Title from "@/shared/typography/Title"
import Body from "@/shared/typography/Body"
import SearchBar from "@/shared/ui/SearchBar"

import UserAvatar from "../../public/people/avatar-1.png"

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-6">
      <AppIcon />

      <SearchBar />

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="flex items-center gap-4">
          <Image
            src={UserAvatar}
            alt="User profile"
            quality={100}
            width={48}
            height={48}
            className="rounded-full"
          />

          <div className="flex flex-col">
            <Title
              size="large"
              className="text-light-onSurface dark:text-dark-onSurface"
            >
              Elizabeth Stuart
            </Title>
            <Body
              size="large"
              className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
            >
              UI Team
            </Body>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
