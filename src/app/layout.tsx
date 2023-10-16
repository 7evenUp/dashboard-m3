import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

import Providers from "@/components/Providers"
import Navigation from "@/components/Navigation"
import Header from "@/components/Header"

import { cn } from "@/lib/cn"

const roboto = Roboto({ weight: ["400", "500"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dashboard M3",
  description:
    "Simple dashboard template using Material Design V3 style guides",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen flex flex-col bg-surface",
          roboto.className
        )}
      >
        <Providers>
          <Header />

          <div className="flex flex-1">
            <Navigation />
            <main className="flex-1 bg-surfaceContainer rounded-tl-[50px]">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
