"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Check,
  Trophy,
  Calendar,
  Heart,
  Palette,
  Gem,
  Mail,
  Send,
  MapPin,
  ChevronDown,
  Package,
  Zap,
  CheckCircle,
  Star,
  Handshake,
  Ruler,
  Leaf,
  Hand,
  Globe,
} from "lucide-react"
import { useState } from "react"
import { MagnetCarousel } from "@/components/magnet-carousel"
import { PlateCarousel } from "@/components/plate-carousel"

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="py-20 min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-[#3d5a80]">Select Sign Studio</h1>
            <p className="text-2xl md:text-3xl mb-8 text-[#ee6c4d] font-semibold text-balance">
              Gifts that Leave a Mark
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto text-pretty leading-relaxed">
              We create unique 3D magnets and custom metal plates. You choose the idea - we turn it into a handcrafted
              product: from memorable magnets to stylish plates for business or home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="flex items-start gap-4 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 hover:bg-white/70 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#ee6c4d]/10 flex items-center justify-center flex-shrink-0">
                <Ruler className="w-6 h-6 text-[#ee6c4d]" />
              </div>
              <div className="text-left">
                <p className="text-gray-700 leading-relaxed">
                  Custom design to match your vision - from sketch to finished product
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 hover:bg-white/70 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#ee6c4d]/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-[#ee6c4d]" />
              </div>
              <div className="text-left">
                <p className="text-gray-700 leading-relaxed">
                  Eco-friendly and safe materials - we work only with quality raw materials
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 hover:bg-white/70 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#ee6c4d]/10 flex items-center justify-center flex-shrink-0">
                <Hand className="w-6 h-6 text-[#ee6c4d]" />
              </div>
              <div className="text-left">
                <p className="text-gray-700 leading-relaxed">
                  Handcrafted with soul - each product passes through the hands of a master
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 hover:bg-white/70 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#ee6c4d]/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-[#ee6c4d]" />
              </div>
              <div className="text-left">
                <p className="text-gray-700 leading-relaxed">
                  Worldwide delivery - from Ukraine to any point in the world
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-[#ee6c4d] hover:bg-[#d85a3a] text-white rounded-full shadow-lg">
              <a href="https://calendly.com/b2b-selectsignstudio/30min" target="_blank" rel="noopener noreferrer">
                Start Your Design
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#3d5a80] text-[#3d5a80] hover:bg-[#3d5a80] hover:text-white bg-white/60 backdrop-blur-md rounded-full"
            >
              <a href="#process">See How We Work</a>
            </Button>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* 3D Magnets Section */}
      <section id="magnets-3d" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#3d5a80]">Our Handcrafted 3D Magnets</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto text-pretty">
              Each magnet is more than a souvenir. It's an emotion, story, and design created especially for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#ee6c4d] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">We manufacture handmade dimensional magnets from safe materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#ee6c4d] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Add colors, textures and details that make the product "alive"</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#ee6c4d] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Can reproduce famous places, buildings, logos or even personal images
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#ee6c4d] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Perfect as souvenirs, corporate gifts or collection elements</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#ee6c4d] hover:bg-[#d85a3a] text-white rounded-full shadow-lg w-full"
                >
                  <a href="https://calendly.com/b2b-selectsignstudio/30min" target="_blank" rel="noopener noreferrer">
                    Want your own design? Order a Magnet
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <MagnetCarousel />
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#ee6c4d] to-transparent w-full max-w-md mx-auto"></div>

      {/* Metal Plates Section */}
      <section id="metal-plates" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#3d5a80]">Metal Plates with Unique Design</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              From retro numbers to custom art plates - we create style that tells your story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <PlateCarousel />
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#ee6c4d] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Manufacture plates of various sizes and shapes: from small souvenirs to large decorative ones
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#ee6c4d] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Use durable metal and modern printing technologies to preserve color brightness and detail
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#ee6c4d] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Custom design possible: stylized as license plates, company logos, art from cult games or movies,
                    collectible series
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#ee6c4d] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Will become an original gift, interior accessory or corporate souvenir
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#ee6c4d] hover:bg-[#d85a3a] text-white rounded-full shadow-lg w-full"
                >
                  <a href="https://calendly.com/b2b-selectsignstudio/30min" target="_blank" rel="noopener noreferrer">
                    Create your own plate design now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#ee6c4d] to-transparent w-full max-w-md mx-auto"></div>

      {/* Custom Design Section */}
      <section id="custom-design" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#3d5a80]">Individual Design for Your Ideas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-6 hover:bg-white/70 hover:shadow-xl transition-all">
              <Trophy className="w-12 h-12 text-[#ee6c4d] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#3d5a80]">Unique Brand Collections</h3>
              <p className="text-gray-600">Creating souvenir lines with logo or corporate style</p>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-6 hover:bg-white/70 hover:shadow-xl transition-all">
              <Calendar className="w-12 h-12 text-[#ee6c4d] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#3d5a80]">Special Event Series</h3>
              <p className="text-gray-600">Festivals, exhibitions, sports events, corporate holidays</p>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-6 hover:bg-white/70 hover:shadow-xl transition-all">
              <Heart className="w-12 h-12 text-[#ee6c4d] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#3d5a80]">Custom Gifts</h3>
              <p className="text-gray-600">Personal magnets or plates with names, dates, favorite places or symbols</p>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-6 hover:bg-white/70 hover:shadow-xl transition-all">
              <Palette className="w-12 h-12 text-[#ee6c4d] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#3d5a80]">Thematic Collections</h3>
              <p className="text-gray-600">
                Cities, countries, retro, pop culture, cyberpunk or any style close to you
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-6 hover:bg-white/70 hover:shadow-xl transition-all">
              <Gem className="w-12 h-12 text-[#ee6c4d] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#3d5a80]">Limited Series</h3>
              <p className="text-gray-600">
                Limited edition products for collectors and true connoisseurs of exclusivity
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-6 hover:bg-white/70 hover:shadow-xl transition-all">
              <Handshake className="w-12 h-12 text-[#ee6c4d] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#3d5a80]">B2B Partnerships</h3>
              <p className="text-gray-600">
                We implement any concept. We collaborate with brands, retailers, and distributors 
              </p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-lg border border-white/30 shadow-xl rounded-3xl p-8 text-center">
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              We take your idea, develop visualization, agree on the design with you and only after that start
              production.
            </p>
            <Button asChild size="lg" className="bg-[#ee6c4d] hover:bg-[#d85a3a] text-white rounded-full shadow-lg">
              <a href="https://calendly.com/b2b-selectsignstudio/30min" target="_blank" rel="noopener noreferrer">
                Tell us your idea and we'll make it a memorable souvenir
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#ee6c4d] to-transparent w-full max-w-md mx-auto"></div>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-[#3d5a80]">
              From Idea to Finished Souvenir - Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Each magnet and plate goes through a meticulous, manual process.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8 hover:bg-white/70 hover:shadow-xl transition-all border-l-4 border-l-[#ee6c4d]">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ee6c4d] to-[#d85a3a] text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  1
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#3d5a80] rounded-full flex items-center justify-center">
                  <Palette className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-[#3d5a80]">Idea and Design</h3>
                <p className="text-gray-600 text-lg">Work with you on concept, create 3D visualization</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8 hover:bg-white/70 hover:shadow-xl transition-all border-r-4 border-r-[#ee6c4d]">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ee6c4d] to-[#d85a3a] text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  2
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#3d5a80] rounded-full flex items-center justify-center">
                  <Package className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-right">
                <h3 className="text-2xl font-bold mb-3 text-[#3d5a80]">Modeling</h3>
                <p className="text-gray-600 text-lg">Create clay models for magnets, digital mockups for plates</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8 hover:bg-white/70 hover:shadow-xl transition-all border-l-4 border-l-[#ee6c4d]">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ee6c4d] to-[#d85a3a] text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  3
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#3d5a80] rounded-full flex items-center justify-center">
                  <Gem className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-[#3d5a80]">Casting and Processing</h3>
                <p className="text-gray-600 text-lg">Manufacture from safe materials, hand-finished</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8 hover:bg-white/70 hover:shadow-xl transition-all border-r-4 border-r-[#ee6c4d]">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ee6c4d] to-[#d85a3a] text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  4
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#3d5a80] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-right">
                <h3 className="text-2xl font-bold mb-3 text-[#3d5a80]">Quality Control</h3>
                <p className="text-gray-600 text-lg">Use only non-toxic materials, check strength and safety</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8 hover:bg-white/70 hover:shadow-xl transition-all border-l-4 border-l-[#ee6c4d]">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ee6c4d] to-[#d85a3a] text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  5
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#3d5a80] rounded-full flex items-center justify-center">
                  <Send className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-[#3d5a80]">Packaging and Delivery</h3>
                <p className="text-gray-600 text-lg">Branded boxes with design story, worldwide shipping</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-[#ee6c4d] hover:bg-[#d85a3a] text-white rounded-full shadow-lg">
              <a href="https://calendly.com/b2b-selectsignstudio/30min" target="_blank" rel="noopener noreferrer">
                See how we work? Order your unique design right now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#ee6c4d] to-transparent w-full max-w-md mx-auto"></div>

      {/* Ready to Create Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-[#3d5a80]">
                Ready to Create Your Unique Souvenir?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
                Let's discuss your project, develop design and deliver the finished product anywhere in the world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 hover:bg-white/70 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ee6c4d]/10 flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-[#ee6c4d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-[#3d5a80]">Minimum order from 200 pcs</h3>
                    <p className="text-gray-600 text-sm">for custom collections</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 hover:bg-white/70 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ee6c4d]/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-[#ee6c4d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-[#3d5a80]">Fast design development</h3>
                    <p className="text-gray-600 text-sm">and approval</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 hover:bg-white/70 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ee6c4d]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#ee6c4d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-[#3d5a80]">Premium quality</h3>
                    <p className="text-gray-600 text-sm">handmade and safe materials</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 hover:bg-white/70 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ee6c4d]/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-[#ee6c4d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-[#3d5a80]">Limited series</h3>
                    <p className="text-gray-600 text-sm">and exclusive design for your brand</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-[#ee6c4d] hover:bg-[#d85a3a] text-white shadow-lg rounded-full">
                <a href="https://calendly.com/b2b-selectsignstudio/30min" target="_blank" rel="noopener noreferrer">
                  Get Quote
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#3d5a80] text-[#3d5a80] hover:bg-[#3d5a80] hover:text-white bg-white/60 backdrop-blur-md rounded-full"
              >
                <a
                  href="https://drive.google.com/drive/folders/1dfFYiOM8wmc-YpUQh8how58BJBu_Zoku?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Catalog
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#ee6c4d] to-transparent w-full max-w-md mx-auto"></div>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#3d5a80]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            <details className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 hover:bg-white/70 hover:shadow-xl transition-all group">
              <summary className="font-bold text-[#3d5a80] cursor-pointer list-none flex items-center justify-between">
                What's the minimum order for custom magnets and plates?
                <ChevronDown className="w-5 h-5 text-[#ee6c4d] group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Minimum order for custom design is 200 pieces for economic production feasibility.
              </p>
            </details>

            <details className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 hover:bg-white/70 hover:shadow-xl transition-all group">
              <summary className="font-bold text-[#3d5a80] cursor-pointer list-none flex items-center justify-between">
                How long does design development and delivery take?
                <ChevronDown className="w-5 h-5 text-[#ee6c4d] group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                On average, design development takes 2-3 weeks, and delivery depends on country - from 5 to 15 days.
              </p>
            </details>

            <details className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 hover:bg-white/70 hover:shadow-xl transition-all group">
              <summary className="font-bold text-[#3d5a80] cursor-pointer list-none flex items-center justify-between">
                Can you make private collections for brands or companies?
                <ChevronDown className="w-5 h-5 text-[#ee6c4d] group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">Yes, we create exclusive series with your logo or corporate style.</p>
            </details>

            <details className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 hover:bg-white/70 hover:shadow-xl transition-all group">
              <summary className="font-bold text-[#3d5a80] cursor-pointer list-none flex items-center justify-between">
                What materials are used for magnets and plates?
                <ChevronDown className="w-5 h-5 text-[#ee6c4d] group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                We use safe, non-toxic materials and metal, certified for gift products.
              </p>
            </details>

            <details className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 hover:bg-white/70 hover:shadow-xl transition-all group">
              <summary className="font-bold text-[#3d5a80] cursor-pointer list-none flex items-center justify-between">
                Can you order different designs in one batch?
                <ChevronDown className="w-5 h-5 text-[#ee6c4d] group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">Yes, we can combine several designs in one order.</p>
            </details>

            <details className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 hover:bg-white/70 hover:shadow-xl transition-all group">
              <summary className="font-bold text-[#3d5a80] cursor-pointer list-none flex items-center justify-between">
                Where do you ship from and do you export to Europe?
                <ChevronDown className="w-5 h-5 text-[#ee6c4d] group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Products are shipped from Ukraine. We deliver to all European countries and worldwide.
              </p>
            </details>
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-[#ee6c4d] hover:bg-[#d85a3a] text-white rounded-full shadow-lg">
              <a href="https://calendly.com/b2b-selectsignstudio/30min" target="_blank" rel="noopener noreferrer">
                More questions? Contact us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#ee6c4d] to-transparent w-full max-w-md mx-auto"></div>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#3d5a80]">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Have questions or ready to discuss an order? We're always in touch and ready to create your unique
              product.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <form
                action="https://formspree.io/f/xqayjrgg"
                method="POST"
                className="space-y-6 bg-white/60 backdrop-blur-md border border-white/20 shadow-lg p-8 rounded-3xl"
              >
                <div>
                  <Label htmlFor="name" className="text-[#3d5a80]">
                    Name <span className="text-[#ee6c4d]">*</span>
                  </Label>
                  <Input id="name" name="name" required className="mt-2 rounded-xl" />
                </div>

                <div>
                  <Label htmlFor="company" className="text-[#3d5a80]">
                    Company
                  </Label>
                  <Input id="company" name="company" className="mt-2 rounded-xl" />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#3d5a80]">
                    Email <span className="text-[#ee6c4d]">*</span>
                  </Label>
                  <Input id="email" name="email" type="email" required className="mt-2 rounded-xl" />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#3d5a80]">
                    Phone
                  </Label>
                  <Input id="phone" name="phone" type="tel" className="mt-2 rounded-xl" />
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#3d5a80]">
                    Message <span className="text-[#ee6c4d]">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your project ideas..."
                    rows={6}
                    className="mt-2 rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#ee6c4d] hover:bg-[#d85a3a] text-white rounded-full shadow-lg"
                >
                  Send Request
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg p-6 rounded-2xl hover:bg-white/70 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#ee6c4d] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3d5a80] mb-1">Email</h3>
                    <a href="mailto:b2b@selectsignstudio.com" className="text-gray-600 hover:text-[#ee6c4d]">
                      b2b@selectsignstudio.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg p-6 rounded-2xl hover:bg-white/70 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#ee6c4d] flex items-center justify-center flex-shrink-0">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3d5a80] mb-1">Telegram</h3>
                    <a
                      href="https://t.me/SelectSignStudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#ee6c4d]"
                    >
                      @SelectSignStudio
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-lg p-6 rounded-2xl hover:bg-white/70 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#ee6c4d] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3d5a80] mb-1">Location</h3>
                    <p className="text-gray-600">Ukraine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
