import { useState } from 'react'
import { User, Mail, Phone, MapPin, Calendar, Save } from 'lucide-react'
import Layout from '../../components/common/Layout'
import Card from '../../components/common/Card'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { useAuth } from '../../context/AuthContext'
import { areas } from '../../data/specialties'

function PatientProfile() {
  const { user } = useAuth()

  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: '0771234567',
    dateOfBirth: '1990-01-15',
    address: '123 Main Street, Colombo',
    area: 'Colombo',
    bloodGroup: 'O+',
    allergies: 'None',
    emergencyContact: '0779876543',
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
    // Save profile logic here
    setIsEditing(false)
    alert('Profile updated successfully!')
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary-light to-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600 text-lg">Manage your personal information</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
            {!isEditing && (
              <Button variant="primary" onClick={() => setIsEditing(true)}>
                Edit Profile
              </Button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                label="Date of Birth"
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                icon={Calendar}
                disabled={!isEditing}
              />

              <div className="md:col-span-2">
                <Input
                  label="Address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  icon={MapPin}
                  disabled={!isEditing}
                />
              </div>

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
                label="Blood Group"
                type="text"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                disabled={!isEditing}
              />

              <Input
                label="Allergies"
                type="text"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                disabled={!isEditing}
              />

              <Input
                label="Emergency Contact"
                type="tel"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                icon={Phone}
                disabled={!isEditing}
              />
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

export default PatientProfile

