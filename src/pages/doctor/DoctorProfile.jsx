import { useState } from 'react'
import { User, Mail, Phone, Briefcase, GraduationCap, Hospital, MapPin, Save } from 'lucide-react'
import Layout from '../../components/common/Layout'
import Card from '../../components/common/Card'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { useAuth } from '../../context/AuthContext'
import { specialties, areas } from '../../data/specialties'

function DoctorProfile() {
  const { user } = useAuth()

  const [formData, setFormData] = useState({
    fullName: user?.name || 'Dr. John Doe',
    email: user?.email || '',
    phone: '0771234567',
    licenseNumber: 'SLMC/12345',
    specialty: 'Cardiology',
    qualifications: 'MBBS, MD (Cardiology), MRCP (UK)',
    experience: '15',
    hospital: 'National Hospital of Sri Lanka',
    area: 'Colombo',
    about: 'Specialist in interventional cardiology with over 15 years of experience in treating complex heart conditions.',
    consultationFee: '3500',
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    alert('Profile updated successfully!')
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-doctor/10 to-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600 text-lg">Manage your professional information</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Professional Information</h2>
            {!isEditing && (
              <Button variant="primary" onClick={() => setIsEditing(true)}>
                Edit Profile
              </Button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  icon={User}
                  disabled={!isEditing}
                />

                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  icon={Mail}
                  disabled={!isEditing}
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  icon={Phone}
                  disabled={!isEditing}
                />

                <Input
                  label="Medical License Number"
                  type="text"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  icon={Briefcase}
                  disabled={!isEditing}
                />
              </div>
            </div>

            {/* Professional Info */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
                  <select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="input-field"
                    disabled={!isEditing}
                  >
                    {specialties.map((specialty) => (
                      <option key={specialty} value={specialty}>
                        {specialty}
                      </option>
                    ))}
                  </select>
                </div>

                <Input
                  label="Qualifications"
                  type="text"
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleChange}
                  icon={GraduationCap}
                  disabled={!isEditing}
                />

                <Input
                  label="Years of Experience"
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  disabled={!isEditing}
                />

                <Input
                  label="Hospital Affiliation"
                  type="text"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleChange}
                  icon={Hospital}
                  disabled={!isEditing}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
                  <select
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="input-field"
                    disabled={!isEditing}
                  >
                    {areas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <Input
                  label="Consultation Fee (LKR)"
                  type="number"
                  name="consultationFee"
                  value={formData.consultationFee}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">About</label>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  rows="4"
                  className="input-field"
                  disabled={!isEditing}
                />
              </div>
            </div>

            {isEditing && (
              <div className="flex gap-4">
                <Button type="submit" variant="success" icon={Save} fullWidth>
                  Save Changes
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  fullWidth
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
              </div>
            )}
          </form>
        </Card>
      </div>
    </Layout>
  )
}

export default DoctorProfile