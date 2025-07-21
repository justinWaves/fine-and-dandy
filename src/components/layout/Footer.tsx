import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/footer-bg-grass.png)' }}>
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              <img 
                src="/navbar-logo.png" 
                alt="Fine & Dandy" 
                className="h-20 w-auto mx-auto md:mx-0"
              />
            </div>
            <p className="text-white font-disco-body text-base mb-4 leading-relaxed">
              Items are made with love by Kelsey and Mikaela, two sisters in Santa Cruz, California. 
              We believe every piece has a story, and every story deserves to be told. ✨
            </p>
            <div className="flex justify-center md:justify-start space-x-3">
              <Link href="#" className="text-white hover:text-yellow-300 transition-colors duration-300 p-2 bg-white/10 rounded-full hover:bg-white/20">
                <Facebook className="h-5 w-5 text-white" />
              </Link>
              <Link href="#" className="text-white hover:text-yellow-300 transition-colors duration-300 p-2 bg-white/10 rounded-full hover:bg-white/20">
                <Instagram className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-disco-heading text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 font-disco-body text-base">
              <li>
                <Link href="/info" className="text-white hover:text-yellow-300 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-yellow-300 transition-colors duration-300">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-yellow-300 transition-colors duration-300">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-disco-heading text-white mb-4">Contact</h4>
            <div className="space-y-3 font-disco-body text-base">
              <div className="flex items-start justify-center md:justify-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-white" />
                <div className="text-white">
                  <p>123 Vintage Lane</p>
                  <p>Santa Cruz, CA 95060</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-white" />
                <span className="text-white">(831) 555-0123</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-white" />
                <span className="text-white">hello@fineanddandy.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 mt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-sm font-disco-body text-white">
              © 2024 Fine & Dandy. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-6 text-sm font-disco-body text-white">
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