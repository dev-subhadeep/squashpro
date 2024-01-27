import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SideMenu from "@/components/SideMenu"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "SquashPro",
  description: "Report bugs. Squash them and chat with your peers",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex flex-row">
        <SideMenu />
        <div className="ml-[90px] w-full flex flex-col justify-center">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  )
}
