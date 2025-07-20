import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-green-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
          {/* Logo and Tagline - Left Side */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              FINE & DANDY
            </h3>
            <p className="text-sm text-white/90 font-permanent-marker">
              Items are made with love by Kelsey and Mikaela, two sisters in Santa Cruz, California.
            </p>
          </div>

          {/* Social Links - Center */}
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-white hover:text-green-200 transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-white hover:text-green-200 transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>

          {/* Copyright - Right Side */}
          <div className="text-center md:text-right">
            <p className="text-xs text-white/80">
              © 2024 Fine & Dandy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 