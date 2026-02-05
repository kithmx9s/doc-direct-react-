import { useState } from 'react'
import { Calendar, Clock, MapPin, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import Layout from '../../components/common/Layout'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'

function PatientAppointments() {
  const [activeTab, setActiveTab] = useState('upcoming') // upcoming, past, cancelled

  const appointments = {
    upcoming: [
      {
        id: 1,
        doctor: 'Dr. Amal Silva',
        specialty: 'Cardiology',
        hospital: 'National Hospital of Sri Lanka',
        address: 'Regent Street, Colombo 07',
        date: '2026-02-10',
        time: '10:00 AM',
        status: 'confirmed'
      },
      {
        id: 2,
        doctor: 'Dr. Priya Fernando',
        specialty: 'Pediatrics',
        hospital: 'National Hospital of Sri Lanka',
        address: 'Regent Street, Colombo 07',
        date: '2026-02-15',
        time: '2:30 PM',
        status: 'confirmed'
      },
    ],
    past: [
      {
        id: 3,
        doctor: 'Dr. Kasun Perera',
        specialty: 'Neurology',
        hospital: 'National Hospital of Sri Lanka',
        address: 'Regent Street, Colombo 07',
        date: '2026-01-28',
        time: '3:00 PM',
        status: 'completed'
      },
    ],
    cancelled: [
      {
        id: 4,
        doctor: 'Dr. Nimal Jayasinghe',
        specialty: 'Orthopedics',
        hospital: 'Asiri Surgical Hospital',
        address: '21, Kirimandala Mawatha, Colombo 05',
        date: '2026-01-20',
        time: '11:00 AM',
        status: 'cancelled'
      },
    ],
  }

  const currentAppointments = appointments[activeTab]

  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmed':
        return (
          <span className="flex items-center gap-1 px-3 py-1 bg-success/10 text-success text-sm font-medium rounded-full">
            <CheckCircle className="h-4 w-4" />
            Confirmed
          </span>
        )
      case 'completed':
        return (
          <span className="flex items-center gap-1 px-3 py-1 bg-info/10 text-info text-sm font-medium rounded-full">
            <CheckCircle className="h-4 w-4" />
            Completed
          </span>
        )
      case 'cancelled':
        return (
          <span className="flex items-center gap-1 px-3 py-1 bg-error/10 text-error text-sm font-medium rounded-full">
            <XCircle className="h-4 w-4" />
            Cancelled
          </span>
        )
      default:
        return null
    }
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary-light to-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Appointments</h1>
          <p className="text-gray-600 text-lg">View and manage your appointments</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
              activeTab === 'upcoming'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Upcoming ({appointments.upcoming.length})
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
              activeTab === 'past'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Past ({appointments.past.length})
          </button>
          <button
            onClick={() => setActiveTab('cancelled')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
              activeTab === 'cancelled'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Cancelled ({appointments.cancelled.length})
          </button>
        </div>

        {/* Appointments List */}
        {currentAppointments.length > 0 ? (
          <div className="space-y-6">
            {currentAppointments.map((appointment) => (
              <Card key={appointment.id}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {appointment.doctor}
                        </h3>
                        <p className="text-primary font-medium">{appointment.specialty}</p>
                      </div>
                      {getStatusBadge(appointment.status)}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium">{appointment.hospital}</p>
                          <p className="text-sm">{appointment.address}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{new Date(appointment.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {appointment.status === 'confirmed' && (
                    <div className="flex flex-col gap-2 md:w-48">
                      <Button variant="secondary" fullWidth>
                        Reschedule
                      </Button>
                      <Button variant="danger" fullWidth>
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <AlertCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No {activeTab} appointments
            </h3>
            <p className="text-gray-500 mb-6">
              {activeTab === 'upcoming' && "You don't have any upcoming appointments"}
              {activeTab === 'past' && "You don't have any past appointments"}
              {activeTab === 'cancelled' && "You don't have any cancelled appointments"}
            </p>
          </Card>
        )}
      </div>
    </Layout>
  )
}

export default PatientAppointments