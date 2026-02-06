
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Hospital, Mail, Phone, MapPin, FileText, User, Building, CheckCircle } from 'lucide-react'
import Layout from '../components/common/Layout'
import Card from '../components/common/Card'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import { areas, specialties } from '../data/specialties'

function HospitalRegistration() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1) // 1: Form, 2: Success
  const [formData, setFormData] = useState({
    hospitalName: '',
    registrationNumber: '',
    email: '',
    phone: '',
    address: '',
    area: '',
    city: '',
    postalCode: '',
    beds: '',
    established: '',
    website: '',
    adminName: '',
    adminEmail: '',
    adminPhone: '',
    adminPosition: '',
    description: '',
    services: [],
    facilities: [],
    specialties: [],
  })

  const [errors, setErrors] = useState({})

  const availableServices = [
    '24/7 Emergency',
    'ICU',
    'NICU',
    'Ambulance Service',
    'Laboratory',
    'Radiology',
    'Pharmacy',
    'Blood Bank',
    'Operation Theater',
    'Maternity Ward',
  ]

  const availableFacilities = [
    'Parking',
    'Cafeteria',
    'WiFi',
    'Wheelchair Access',
    'Elevator',
    'ATM',
    'Patient Rooms',
    'Waiting Area',
  ]

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

  const handleCheckbox = (category, value) => {
    setFormData((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.hospitalName) newErrors.hospitalName = 'Hospital name is required'
    if (!formData.registrationNumber) newErrors.registrationNumber = 'Registration number is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.phone) newErrors.phone = 'Phone is required'
    if (!formData.address) newErrors.address = 'Address is required'
    if (!formData.area) newErrors.area = 'Area is required'
    if (!formData.adminName) newErrors.adminName = 'Admin name is required'
    if (!formData.adminEmail) newErrors.adminEmail = 'Admin email is required'
    if (!formData.adminPhone) newErrors.adminPhone = 'Admin phone is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Simulate submission
      console.log('Hospital Registration Request:', formData)
      setStep(2)
    }
  }

  if (step === 2) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-success/10 to-white flex items-center justify-center px-4">
          <Card className="max-w-2xl w-full text-center">
            <div className="bg-success w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Registration Request Submitted! 🎉
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your interest in joining Doc Direct. Your hospital registration request has been submitted successfully.
            </p>

            <Card className="bg-primary-light text-left mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">What's Next?</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <p>Our admin team will review your application within 3-5 business days.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <p>We may contact you for additional information or to schedule an interview.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <p>Once approved, you'll receive login credentials to manage your hospital profile.</p>
                </div>
              </div>
            </Card>

            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Reference Number: <span className="font-mono font-semibold">HSP-{Date.now()}</span>
              </p>
              <p className="text-sm text-gray-600">
                You will receive a confirmation email at <span className="font-semibold">{formData.adminEmail}</span>
              </p>
            </div>

            <div className="mt-8">
              <Button variant="primary" onClick={() => navigate('/')} fullWidth>
                Back to Home
              </Button>
            </div>
          </Card>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-hospital/10 to-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Hospital Registration</h1>
          <p className="text-gray-600 text-lg">
            Join the Doc Direct network and connect with thousands of patients
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Hospital Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Hospital className="h-6 w-6 text-primary" />
                Hospital Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Hospital Name"
                  type="text"
                  name="hospitalName"
                  placeholder="e.g., Central City Hospital"
                  value={formData.hospitalName}
                  onChange={handleChange}
                  error={errors.hospitalName}
                  icon={Building}
                  required
                />

                <Input
                  label="Registration Number"
                  type="text"
                  name="registrationNumber"
                  placeholder="e.g., REG/2024/001"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  error={errors.registrationNumber}
                  icon={FileText}
                  required
                />

                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="hospital@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  icon={Mail}
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  placeholder="0112345678"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  icon={Phone}
                  required
                />

                <div className="md:col-span-2">
                  <Input
                    label="Address"
                    type="text"
                    name="address"
                    placeholder="Street address"
                    value={formData.address}
                    onChange={handleChange}
                    error={errors.address}
                    icon={MapPin}
                    required
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
                    required
                  >
                    <option value="">Select Area</option>
                    {areas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                  {errors.area && <p className="mt-1 text-sm text-error">{errors.area}</p>}
                </div>

                <Input
                  label="City"
                  type="text"
                  name="city"
                  placeholder="e.g., Colombo"
                  value={formData.city}
                  onChange={handleChange}
                />

                <Input
                  label="Number of Beds"
                  type="number"
                  name="beds"
                  placeholder="e.g., 100"
                  value={formData.beds}
                  onChange={handleChange}
                />

                <Input
                  label="Established Year"
                  type="number"
                  name="established"
                  placeholder="e.g., 2000"
                  value={formData.established}
                  onChange={handleChange}
                />

                <div className="md:col-span-2">
                  <Input
                    label="Website (Optional)"
                    type="url"
                    name="website"
                    placeholder="https://www.hospital.com"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Admin Contact */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <User className="h-6 w-6 text-primary" />
                Administrative Contact
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  type="text"
                  name="adminName"
                  placeholder="e.g., John Doe"
                  value={formData.adminName}
                  onChange={handleChange}
                  error={errors.adminName}
                  icon={User}
                  required
                />

                <Input
                  label="Position/Title"
                  type="text"
                  name="adminPosition"
                  placeholder="e.g., Hospital Administrator"
                  value={formData.adminPosition}
                  onChange={handleChange}
                />

                <Input
                  label="Email"
                  type="email"
                  name="adminEmail"
                  placeholder="admin@example.com"
                  value={formData.adminEmail}
                  onChange={handleChange}
                  error={errors.adminEmail}
                  icon={Mail}
                  required
                />

                <Input
                  label="Phone"
                  type="tel"
                  name="adminPhone"
                  placeholder="0771234567"
                  value={formData.adminPhone}
                  onChange={handleChange}
                  error={errors.adminPhone}
                  icon={Phone}
                  required
                />
              </div>
            </div>

            {/* Services & Facilities */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Services & Facilities</h2>

              <div className="space-y-6">
                {/* Specialties */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Available Specialties
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {specialties.slice(0, 12).map((specialty) => (
                      <label key={specialty} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.specialties.includes(specialty)}
                          onChange={() => handleCheckbox('specialties', specialty)}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700">{specialty}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Medical Services
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {availableServices.map((service) => (
                      <label key={service} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleCheckbox('services', service)}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Facilities */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Facilities
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {availableFacilities.map((facility) => (
                      <label key={facility} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.facilities.includes(facility)}
                          onChange={() => handleCheckbox('facilities', facility)}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700">{facility}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-t pt-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hospital Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                className="input-field"
                placeholder="Provide a brief description of your hospital, its mission, and what makes it unique..."
              />
            </div>

            {/* Submit */}
            <div className="flex gap-4">
              <Button type="submit" variant="primary" fullWidth size="large">
                Submit Registration Request
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  )
}

export default HospitalRegistration