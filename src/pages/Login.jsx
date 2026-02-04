import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, User, Stethoscope } from 'lucide-react'
import Layout from '../components/common/Layout'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import { useAuth } from '../context/AuthContext'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [userType, setUserType] = useState('patient') // patient or doctor
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Simulate login (in real app, this would call an API)
      const userData = {
        email: formData.email,
        role: userType,
        name: userType === 'patient' ? 'John Doe' : 'Dr. John Doe',
      }

      login(userData)

      // Navigate based on user type
      if (userType === 'patient') {
        navigate('/patient/dashboard')
      } else if (userType === 'doctor') {
        navigate('/doctor/dashboard')
      }
    }
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-light to-white py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 animate-fadeIn">
            <h1 className="text-4xl font-bold text-primary mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to continue to Doc Direct</p>
          </div>

          <div className="bg-white rounded-2xl shadow-card-hover p-8 animate-slideInUp">
            {/* User Type Selection */}
            <div className="flex gap-4 mb-8">
              <button
                type="button"
                onClick={() => setUserType('patient')}
                className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  userType === 'patient'
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <User className="h-5 w-5" />
                Patient
              </button>
              <button
                type="button"
                onClick={() => setUserType('doctor')}
                className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  userType === 'doctor'
                    ? 'bg-doctor text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Stethoscope className="h-5 w-5" />
                Doctor
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                icon={Mail}
                required
              />

              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                icon={Lock}
                required
              />

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-primary hover:text-primary-dark">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" variant="primary" fullWidth size="large">
                Sign In
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Don't have an account?</span>
              </div>
            </div>

            {/* Register Link */}
            <Link to="/register">
              <Button variant="secondary" fullWidth>
                Create New Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
