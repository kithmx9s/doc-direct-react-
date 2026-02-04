import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, User as UserIcon, Phone, MapPin, Stethoscope, Briefcase, GraduationCap } from 'lucide-react'
import Layout from '../components/common/Layout'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import { useAuth } from '../context/AuthContext'
import { specialties, areas } from '../data/specialties'

function Register() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [userType, setUserType] = useState('patient') // patient or doctor

  const [patientData, setPatientData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    area: '',
  })

  const [doctorData, setDoctorData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    licenseNumber: '',
    specialty: '',
    qualifications: '',
    experience: '',
    hospital: '',
    area: '',
  })

  const [errors, setErrors] = useState({})

  const formData = userType === 'patient' ? patientData : doctorData
  const setFormData = userType === 'patient' ? setPatientData : setDoctorData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName) newErrors.fullName = 'Full name is required'
    
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

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits'
    }

    if (userType === 'doctor') {
      if (!formData.licenseNumber) newErrors.licenseNumber = 'License number is required'
      if (!formData.specialty) newErrors.specialty = 'Specialty is required'
      if (!formData.qualifications) newErrors.qualifications = 'Qualifications are required'
      if (!formData.experience) newErrors.experience = 'Experience is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      const userData = {
        ...formData,
        role: userType,
      }

      register(userData)

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
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 animate-fadeIn">
            <h1 className="text-4xl font-bold text-primary mb-2">Create Account</h1>
            <p className="text-gray-600">Join Doc Direct today</p>
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
                <UserIcon className="h-5 w-5" />
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

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Common Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                  icon={UserIcon}
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  placeholder="0771234567"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  icon={Phone}
                  required
                />
              </div>

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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Minimum 6 characters"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  icon={Lock}
                  required
                />

                <Input
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  icon={Lock}
                  required
                />
              </div>

              {/* Patient Specific Fields */}
              {userType === 'patient' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Date of Birth"
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      error={errors.dateOfBirth}
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Area <span className="text-error">*</span>
                      </label>
                      <select
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select Area</option>
                        {areas.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Input
                    label="Address"
                    type="text"
                    name="address"
                    placeholder="Your full address"
                    value={formData.address}
                    onChange={handleChange}
                    error={errors.address}
                    icon={MapPin}
                  />
                </>
              )}

              {/* Doctor Specific Fields */}
              {userType === 'doctor' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Medical License Number"
                      type="text"
                      name="licenseNumber"
                      placeholder="e.g., SLMC/12345"
                      value={formData.licenseNumber}
                      onChange={handleChange}
                      error={errors.licenseNumber}
                      icon={Briefcase}
                      required
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specialty <span className="text-error">*</span>
                      </label>
                      <select
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        className="input-field"
                        required
                      >
                        <option value="">Select Specialty</option>
                        {specialties.map((specialty) => (
                          <option key={specialty} value={specialty}>
                            {specialty}
                          </option>
                        ))}
                      </select>
                      {errors.specialty && <p className="mt-1 text-sm text-error">{errors.specialty}</p>}
                    </div>
                  </div>

                  <Input
                    label="Qualifications"
                    type="text"
                    name="qualifications"
                    placeholder="e.g., MBBS, MD (Cardiology)"
                    value={formData.qualifications}
                    onChange={handleChange}
                    error={errors.qualifications}
                    icon={GraduationCap}
                    required
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Years of Experience"
                      type="number"
                      name="experience"
                      placeholder="e.g., 10"
                      value={formData.experience}
                      onChange={handleChange}
                      error={errors.experience}
                      required
                    />

                    <Input
                      label="Hospital Affiliation"
                      type="text"
                      name="hospital"
                      placeholder="Current hospital"
                      value={formData.hospital}
                      onChange={handleChange}
                      error={errors.hospital}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Area <span className="text-error">*</span>
                    </label>
                    <select
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select Area</option>
                      {areas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              <Button type="submit" variant="primary" fullWidth size="large">
                Create Account
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Already have an account?</span>
              </div>
            </div>

            {/* Login Link */}
            <Link to="/login">
              <Button variant="secondary" fullWidth>
                Sign In Instead
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Register