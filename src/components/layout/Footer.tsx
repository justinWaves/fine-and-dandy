import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-600 to-green-700 py-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/navbar-logo.png" 
                alt="Fine & Dandy" 
                className="h-48 w-auto max-w-md"
                style={{ minHeight: '120px' }}
              />
            </div>
            <p className="text-white/90 font-disco-body mb-2 leading-relaxed text-sm">
              Items are made with love by Kelsey and Mikaela, two sisters in Santa Cruz, California. 
              We believe every piece has a story, and every story deserves to be told. ✨
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-green-200 transition-colors duration-300 p-2 bg-white/10 rounded-full hover:bg-white/20">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-green-200 transition-colors duration-300 p-2 bg-white/10 rounded-full hover:bg-white/20">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-disco-heading text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 font-disco-body text-white/90">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-300">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/info" className="hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-300">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-300">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-disco-heading text-white mb-4">Visit Us</h4>
            <div className="space-y-3 font-disco-body text-white/90">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>123 Vintage Lane</p>
                  <p>Santa Cruz, CA 95060</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(831) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>hello@fineanddandy.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Tue-Sat: 11am-7pm</p>
                  <p>Sun: 12pm-5pm</p>
                  <p>Mon: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/80 font-disco-body">
              © 2024 Fine & Dandy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/80 font-disco-body">
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 