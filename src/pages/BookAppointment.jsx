import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Calendar, Clock, MapPin, User, Phone, Mail, CheckCircle } from 'lucide-react'
import Layout from '../components/common/Layout'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import Input from '../components/common/Input'
import { mockDoctors } from '../data/mockDoctors'
import { useAuth } from '../context/AuthContext'

function BookAppointment() {
  const { doctorId } = useParams()
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  const doctor = mockDoctors.find(d => d.id === parseInt(doctorId))

  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [reason, setReason] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)

  // Generate available time slots
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ]

  // Get next 7 days for date selection
  const getAvailableDates = () => {
    const dates = []
    for (let i = 1; i <= 7; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      dates.push(date.toISOString().split('T')[0])
    }
    return dates
  }

  const availableDates = getAvailableDates()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!isAuthenticated) {
      navigate('/login')
      return
    }

    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time')
      return
    }

    setIsSubmitting(true)

    // Simulate booking process
    setTimeout(() => {
      setIsSubmitting(false)
      setBookingComplete(true)
    }, 1500)
  }

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

  if (bookingComplete) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-success/10 to-white flex items-center justify-center px-4">
          <Card className="max-w-2xl w-full text-center">
            <div className="bg-success w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Appointment Booked Successfully! 🎉</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your appointment with {doctor.name} has been confirmed.
            </p>

            <Card className="bg-gray-50 text-left mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Appointment Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <User className="h-5 w-5 text-primary" />
                  <span>{doctor.name} - {doctor.specialty}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{doctor.hospital}, {doctor.area}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{selectedTime}</span>
                </div>
              </div>
            </Card>

            <div className="flex gap-4">
              <Link to="/patient/appointments" className="flex-1">
                <Button variant="primary" fullWidth>
                  View My Appointments
                </Button>
              </Link>
              <Link to="/find-doctor" className="flex-1">
                <Button variant="secondary" fullWidth>
                  Book Another
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary-light to-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Book Appointment</h1>
          <p className="text-gray-600 text-lg">Schedule your consultation with {doctor.name}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doctor Info */}
          <div>
            <Card>
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
              <p className="text-primary font-medium mb-3">{doctor.specialty}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{doctor.hospital}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="h-4 w-4 text-primary" />
                  <span>{doctor.experience} years experience</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-4">{doctor.qualifications}</p>

              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-2">About</p>
                <p className="text-sm text-gray-700">{doctor.about}</p>
              </div>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Date & Time</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Date <span className="text-error">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {availableDates.map((date) => {
                      const dateObj = new Date(date)
                      const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' })
                      const dayNum = dateObj.getDate()
                      const month = dateObj.toLocaleDateString('en-US', { month: 'short' })

                      return (
                        <button
                          key={date}
                          type="button"
                          onClick={() => setSelectedDate(date)}
                          className={`p-4 border-2 rounded-lg text-center transition-all duration-300 ${
                            selectedDate === date
                              ? 'border-primary bg-primary text-white shadow-lg'
                              : 'border-gray-200 hover:border-primary hover:shadow-md'
                          }`}
                        >
                          <div className="text-sm font-medium">{dayName}</div>
                          <div className="text-2xl font-bold">{dayNum}</div>
                          <div className="text-xs">{month}</div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Time Slot Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Time Slot <span className="text-error">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 border-2 rounded-lg text-center font-medium transition-all duration-300 ${
                          selectedTime === time
                            ? 'border-primary bg-primary text-white shadow-lg'
                            : 'border-gray-200 hover:border-primary hover:shadow-md'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reason for Visit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Visit (Optional)
                  </label>
                  <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    rows="4"
                    className="input-field"
                    placeholder="Please describe your symptoms or reason for consultation..."
                  />
                </div>

                {/* Summary */}
                {selectedDate && selectedTime && (
                  <Card className="bg-primary-light animate-slideInUp">
                    <h3 className="font-semibold text-gray-900 mb-3">Appointment Summary</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <span>Doctor:</span>
                        <span className="font-medium">{doctor.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="font-medium">
                          {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span className="font-medium">{doctor.hospital}</span>
                      </div>
                    </div>
                  </Card>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  size="large"
                  disabled={isSubmitting || !selectedDate || !selectedTime}
                >
                  {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BookAppointment