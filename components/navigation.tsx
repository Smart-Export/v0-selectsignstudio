"use client"

import type React from "react"
import Image from "next/image"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#magnets-3d", label: "3D Magnets" },
  { href: "#metal-plates", label: "Metal Plates" },
  { href: "#custom-design", label: "Custom Design" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export default function Navigation() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    try {
      const element = document.querySelector(href)
      if (element) {
        const yOffset = -80
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset

        window.scrollTo({ top: y, behavior: "smooth" })
      }
    } catch (error) {
      window.location.hash = href
    }
  }

  return (
    <nav className="sticky top-4 z-50 mx-4">
      <div className="container mx-auto px-6 bg-white/80 backdrop-blur-lg rounded-full border border-white/20 shadow-lg">
        <div className="flex items-center justify-between h-16">
          <a href="#home" onClick={(e) => handleClick(e, "#home")} className="flex items-center">
            <Image src="/logo.png" alt="Select Sign Studio" width={180} height={40} className="h-8 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-[#3d5a80] hover:text-[#ee6c4d] transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
