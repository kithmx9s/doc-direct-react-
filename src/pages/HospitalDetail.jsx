import { useParams, Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Star, Clock, Users, Stethoscope, Award, Calendar as CalendarIcon } from 'lucide-react'
import Layout from '../components/common/Layout'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { mockHospitals } from '../data/mockHospitals'

function HospitalDetail() {
  const { hospitalId } = useParams()
  const hospital = mockHospitals.find(h => h.id === parseInt(hospitalId))

  if (!hospital) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hospital not found</h2>
          <Link to="/find-hospital">
            <Button variant="primary">Back to Search</Button>
          </Link>
        </div>
      </Layout>
    )
  }

  // Mock additional data
  const facilities = [
    { name: 'Parking', available: true },
    { name: 'Cafeteria', available: true },
    { name: 'WiFi', available: true },
    { name: 'Wheelchair Access', available: true },
    { name: 'ATM', available: true },
    { name: 'Pharmacy', available: true },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{hospital.name}</h1>
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-5 w-5 text-warning fill-warning" />
                <span className="font-semibold">{hospital.rating}</span>
                <span className="opacity-90">({hospital.totalReviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{hospital.area}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hospital Overview</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{hospital.beds}</p>
                  <p className="text-sm text-gray-600">Beds</p>
                </div>

                <div className="text-center">
                  <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Stethoscope className="h-8 w-8 text-success" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{hospital.doctors.length}</p>
                  <p className="text-sm text-gray-600">Doctors</p>
                </div>

                <div className="text-center">
                  <div className="bg-info/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="h-8 w-8 text-info" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{hospital.established}</p>
                  <p className="text-sm text-gray-600">Established</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">About</h3>
                <p className="text-gray-700 leading-relaxed">
                  {hospital.name} is a {hospital.beds}-bed facility established in {hospital.established}. 
                  We are committed to providing exceptional healthcare services with state-of-the-art equipment 
                  and a team of highly qualified medical professionals.
                </p>
              </div>
            </Card>

            {/* Specialties */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Specialties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {hospital.availableSpecialties.map((specialty) => (
                  <div
                    key={specialty}
                    className="flex items-center gap-3 p-3 bg-primary-light rounded-lg hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">{specialty}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Features */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Features & Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hospital.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg"
                  >
                    <div className="bg-success w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Facilities */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Facilities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {facilities.map((facility) => (
                  <div
                    key={facility.name}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      facility.available ? 'bg-success' : 'bg-gray-300'
                    }`}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>{facility.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium text-gray-900">{hospital.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900">{hospital.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">{hospital.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Operating Hours</p>
                    <p className="font-medium text-gray-900">{hospital.operatingHours}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-primary to-primary-dark text-white">
              <h3 className="text-xl font-bold mb-4">Find a Doctor</h3>
              <p className="text-sm opacity-90 mb-4">
                Browse our {hospital.doctors.length} qualified doctors and book an appointment
              </p>
              <Link to="/find-doctor">
                <Button variant="secondary" fullWidth>
                  Browse Doctors
                </Button>
              </Link>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                <MapPin className="h-12 w-12 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600 mt-3">{hospital.address}</p>
            </Card>

            {/* Back Button */}
            <Link to="/find-hospital">
              <Button variant="ghost" fullWidth>
                Back to Hospital Search
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HospitalDetail