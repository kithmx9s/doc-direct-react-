import { Link } from 'react-router-dom'
import { Calendar, FileText, User, Search, Clock, CheckCircle, XCircle } from 'lucide-react'
import Layout from '../../components/common/Layout'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'
import { useAuth } from '../../context/AuthContext'

function PatientDashboard() {
  const { user } = useAuth()

  // Mock data - will come from API later
  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Amal Silva',
      specialty: 'Cardiology',
      hospital: 'National Hospital of Sri Lanka',
      date: '2026-02-10',
      time: '10:00 AM',
      status: 'confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Priya Fernando',
      specialty: 'Pediatrics',
      hospital: 'National Hospital of Sri Lanka',
      date: '2026-02-15',
      time: '2:30 PM',
      status: 'confirmed'
    },
  ]

  const recentRecords = [
    {
      id: 1,
      type: 'Diagnosis',
      doctor: 'Dr. Kasun Perera',
      date: '2026-01-28',
      description: 'Regular checkup - All vitals normal'
    },
    {
      id: 2,
      type: 'Prescription',
      doctor: 'Dr. Amal Silva',
      date: '2026-01-20',
      description: 'Blood pressure medication'
    },
  ]

  const stats = [
    { label: 'Upcoming Appointments', value: upcomingAppointments.length, icon: Calendar, color: 'bg-primary' },
    { label: 'Medical Records', value: 12, icon: FileText, color: 'bg-success' },
    { label: 'Total Visits', value: 24, icon: CheckCircle, color: 'bg-info' },
  ]

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary-light to-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fadeIn">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.name || 'Patient'}! 👋
            </h1>
            <p className="text-gray-600 text-lg">
              Here's your health overview
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/find-doctor">
              <Button variant="primary" fullWidth icon={Search}>
                Find a Doctor
              </Button>
            </Link>
            <Link to="/patient/appointments">
              <Button variant="secondary" fullWidth icon={Calendar}>
                My Appointments
              </Button>
            </Link>
            <Link to="/patient/medical-records">
              <Button variant="secondary" fullWidth icon={FileText}>
                Medical Records
              </Button>
            </Link>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Appointments */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Upcoming Appointments</h2>
              <Link to="/patient/appointments" className="text-primary hover:text-primary-dark font-medium">
                View All
              </Link>
            </div>

            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                        <p className="text-sm text-gray-600">{appointment.specialty}</p>
                      </div>
                      <span className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                        Confirmed
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{appointment.hospital}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(appointment.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {appointment.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">No upcoming appointments</p>
                <Link to="/find-doctor">
                  <Button variant="primary">Book an Appointment</Button>
                </Link>
              </div>
            )}
          </Card>

          {/* Recent Medical Records */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent Medical Records</h2>
              <Link to="/patient/medical-records" className="text-primary hover:text-primary-dark font-medium">
                View All
              </Link>
            </div>

            {recentRecords.length > 0 ? (
              <div className="space-y-4">
                {recentRecords.map((record) => (
                  <div
                    key={record.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-gray-900">{record.type}</h3>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(record.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">By {record.doctor}</p>
                    <p className="text-sm text-gray-700">{record.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">No medical records yet</p>
              </div>
            )}
          </Card>
        </div>

        {/* Profile Completion */}
        <Card className="mt-8 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Complete Your Profile</h3>
              <p className="opacity-90">Add more information to help doctors provide better care</p>
            </div>
            <Link to="/patient/profile">
              <Button variant="secondary" icon={User}>
                Update Profile
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default PatientDashboard
