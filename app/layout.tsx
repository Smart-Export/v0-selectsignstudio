import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata = {
  title: "Select Sign Studio - Custom 3D Magnets & Metal Plates",
  description: "Handcrafted 3D magnets and metal plates with unique designs",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      {/* </CHANGE> */}
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
