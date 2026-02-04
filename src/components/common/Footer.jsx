import { Link } from 'react-router-dom'
import { Stethoscope, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Doc Direct</span>
            </div>
            <p className="text-sm">
              Your direct path to healthcare. Connecting patients with the best doctors and hospitals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/find-hospital" className="hover:text-primary transition-colors duration-300">
                  Find Hospital
                </Link>
              </li>
              <li>
                <Link to="/find-doctor" className="hover:text-primary transition-colors duration-300">
                  Find Doctor
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors duration-300">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* For Providers */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Providers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/register" className="hover:text-primary transition-colors duration-300">
                  Register as Doctor
                </Link>
              </li>
              <li>
                <Link to="/hospital-registration" className="hover:text-primary transition-colors duration-300">
                  Register Hospital
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  Provider Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm">123 Healthcare St, Medical District, City 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">support@docdirect.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Doc Direct. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer