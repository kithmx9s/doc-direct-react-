import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Stethoscope, LogOut, User } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary">Doc Direct</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/find-hospital" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
              Find Hospital
            </Link>
            <Link to="/find-doctor" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
              Find Doctor
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
              About
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to={user?.role === 'patient' ? '/patient/dashboard' : '/doctor/dashboard'}>
                  <button className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-300 font-medium">
                    <User className="h-5 w-5" />
                    {user?.name}
                  </button>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-gray-700 hover:text-error transition-colors duration-300 font-medium"
                >
                  <LogOut className="h-5 w-5" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="text-primary hover:text-primary-dark transition-colors duration-300 font-medium">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn-primary">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-primary-light hover:text-primary rounded-lg transition-all duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/find-hospital"
            className="block px-4 py-2 text-gray-700 hover:bg-primary-light hover:text-primary rounded-lg transition-all duration-300"
            onClick={toggleMenu}
          >
            Find Hospital
          </Link>
          <Link
            to="/find-doctor"
            className="block px-4 py-2 text-gray-700 hover:bg-primary-light hover:text-primary rounded-lg transition-all duration-300"
            onClick={toggleMenu}
          >
            Find Doctor
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-primary-light hover:text-primary rounded-lg transition-all duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          
          <div className="pt-4 space-y-2">
            {isAuthenticated ? (
              <>
                <Link 
                  to={user?.role === 'patient' ? '/patient/dashboard' : '/doctor/dashboard'} 
                  onClick={toggleMenu}
                >
                  <button className="w-full btn-secondary flex items-center justify-center gap-2">
                    <User className="h-5 w-5" />
                    {user?.name}
                  </button>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="w-full btn-danger flex items-center justify-center gap-2"
                >
                  <LogOut className="h-5 w-5" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={toggleMenu}>
                  <button className="w-full btn-secondary">Login</button>
                </Link>
                <Link to="/register" onClick={toggleMenu}>
                  <button className="w-full btn-primary">Register</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar