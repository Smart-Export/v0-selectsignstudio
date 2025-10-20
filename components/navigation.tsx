"use client"

import type React from "react"
import Image from "next/image"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#magnets-3d", label: "3D Magnets" }, // Updated href to match new section ID
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
        const yOffset = -80 // Negative offset for fixed header
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset

        window.scrollTo({ top: y, behavior: "smooth" })
      }
    } catch (error) {
      // Fallback to default anchor behavior
      window.location.hash = href
    }
  }

  return (
    <nav className="bg-[#3d5a80] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
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
                className="hover:text-[#ee6c4d] transition-colors"
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
