import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, MapPin, Briefcase, GraduationCap, Hospital, Calendar, Clock, Phone, Mail, Award, Languages, AlertCircle } from 'lucide-react'
import Layout from '../components/common/Layout'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { mockDoctors } from '../data/mockDoctors'

function DoctorDetail() {
  const { doctorId } = useParams()
  const navigate = useNavigate()
  const doctor = mockDoctors.find(d => d.id === parseInt(doctorId))

  if (!doctor) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor not found</h2>
          <Link to="/find-doctor">
            <Button variant="primary">Back to Search</Button>
          </Link>
        </div>
      </Layout>
    )
  }

  const isAvailable = doctor.availableSlots > 0

  // Mock reviews
  const reviews = [
    {
      id: 1,
      patientName: 'Sarah M.',
      rating: 5,
      date: '2026-01-28',
      comment: 'Excellent doctor! Very thorough and takes time to explain everything clearly.',
    },
    {
      id: 2,
      patientName: 'John D.',
      rating: 5,
      date: '2026-01-20',
      comment: 'Highly recommended. Professional and caring approach to patient care.',
    },
    {
      id: 3,
      patientName: 'Maria K.',
      rating: 4,
      date: '2026-01-15',
      comment: 'Great experience. The doctor was very knowledgeable and helpful.',
    },
  ]

  return (
    <Layout>
      {/* Header Section */}
      <div className="bg-gradient-to-br from-primary-light to-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Doctor Image & Basic Info */}
            <div className="lg:col-span-1">
              <Card className="text-center">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20"
                />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                <p className="text-xl text-primary font-semibold mb-4">{doctor.specialty}</p>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 text-warning fill-warning" />
                    <span className="text-lg font-bold">{doctor.rating}</span>
                  </div>
                  <span className="text-gray-500">({doctor.totalReviews} reviews)</span>
                </div>

                {/* Availability Status */}
                {isAvailable ? (
                  <div className="flex items-center justify-center gap-2 text-success mb-6">
                    <Calendar className="h-5 w-5" />
                    <span className="font-semibold">{doctor.availableSlots} slots available</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-error mb-6">
                    <AlertCircle className="h-5 w-5" />
                    <span className="font-semibold">Fully booked</span>
                  </div>
                )}

                {isAvailable ? (
                  <Link to={`/book-appointment/${doctor.id}`}>
                    <Button variant="primary" fullWidth size="large" icon={Calendar}>
                      Book Appointment
                    </Button>
                  </Link>
                ) : (
                  <Button variant="secondary" fullWidth size="large" disabled>
                    Not Available
                  </Button>
                )}
              </Card>
            </div>

            {/* Quick Info */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Hospital className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Hospital</p>
                      <p className="font-semibold text-gray-900">{doctor.hospital}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold text-gray-900">{doctor.area}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Experience</p>
                      <p className="font-semibold text-gray-900">{doctor.experience} years</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Qualifications</p>
                      <p className="font-semibold text-gray-900">{doctor.qualifications}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Languages className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Languages</p>
                      <p className="font-semibold text-gray-900">{doctor.languages.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {doctor.name}</h2>
              <p className="text-gray-700 leading-relaxed">{doctor.about}</p>
            </Card>

            {/* Reviews */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Reviews</h2>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">{review.patientName}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? 'text-warning fill-warning'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="bg-gradient-to-br from-primary to-primary-dark text-white">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Hospital className="h-5 w-5" />
                  <div>
                    <p className="text-sm opacity-90">Hospital</p>
                    <p className="font-semibold">{doctor.hospital}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <div>
                    <p className="text-sm opacity-90">Location</p>
                    <p className="font-semibold">{doctor.area}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Consultation Fee */}
            <Card className="bg-success/10 border-2 border-success/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Consultation Fee</p>
                  <p className="text-2xl font-bold text-success">LKR {doctor.consultationFee}</p>
                </div>
                <Award className="h-12 w-12 text-success/50" />
              </div>
            </Card>

            {/* Quick Actions */}
            <Card>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to={`/book-appointment/${doctor.id}`}>
                  <Button variant="primary" fullWidth icon={Calendar}>
                    Book Appointment
                  </Button>
                </Link>
                <Button variant="secondary" fullWidth icon={Phone}>
                  Contact Hospital
                </Button>
                <Link to="/find-doctor">
                  <Button variant="ghost" fullWidth>
                    Back to Search
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DoctorDetail

