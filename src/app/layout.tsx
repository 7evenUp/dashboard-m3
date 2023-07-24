import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

import Providers from "@/components/Providers"

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
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
