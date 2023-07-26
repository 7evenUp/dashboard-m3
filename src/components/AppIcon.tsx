"use client"

import React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

import AppIconLight from "../../public/AppIconLargeLight.png"
import AppIconDark from "../../public/AppIconLargeDark.png"

const AppIcon = () => {
  const { theme } = useTheme()

  if (theme === "light")
    return <Image src={AppIconLight} alt="App logo" quality={100} />

  return <Image src={AppIconDark} alt="App logo" quality={100} />
}

export default AppIcon
