import { Link } from 'react-router-dom'
import { Calendar, Users, Clock, TrendingUp, CheckCircle, User } from 'lucide-react'
import Layout from '../../components/common/Layout'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'
import { useAuth } from '../../context/AuthContext'

function DoctorDashboard() {
  const { user } = useAuth()

  // Mock data
  const todayAppointments = [
    {
      id: 1,
      patient: 'John Doe',
      time: '10:00 AM',
      type: 'Consultation',
      status: 'upcoming'
    },
    {
      id: 2,
      patient: 'Jane Smith',
      time: '11:30 AM',
      type: 'Follow-up',
      status: 'upcoming'
    },
    {
      id: 3,
      patient: 'Michael Brown',
      time: '2:00 PM',
      type: 'Consultation',
      status: 'upcoming'
    },
  ]

  const stats = [
    { label: "Today's Appointments", value: todayAppointments.length, icon: Calendar, color: 'bg-primary' },
    { label: 'Total Patients', value: 156, icon: Users, color: 'bg-success' },
    { label: 'Available Slots', value: 12, icon: Clock, color: 'bg-warning' },
    { label: 'This Month', value: 89, icon: TrendingUp, color: 'bg-info' },
  ]

  return (
    <Layout>
      <div className="bg-gradient-to-br from-doctor/10 to-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fadeIn">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome, {user?.name || 'Doctor'}! 👨‍⚕️
            </h1>
            <p className="text-gray-600 text-lg">
              Here's your practice overview for today
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
            <Link to="/doctor/schedule">
              <Button variant="primary" fullWidth icon={Calendar}>
                Manage Schedule
              </Button>
            </Link>
            <Link to="/doctor/patients">
              <Button variant="secondary" fullWidth icon={Users}>
                Patient List
              </Button>
            </Link>
            <Link to="/doctor/profile">
              <Button variant="secondary" fullWidth icon={User}>
                Update Profile
              </Button>
            </Link>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Appointments */}
          <div className="lg:col-span-2">
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Today's Appointments</h2>
                <Link to="/doctor/appointments" className="text-primary hover:text-primary-dark font-medium">
                  View All
                </Link>
              </div>

              {todayAppointments.length > 0 ? (
                <div className="space-y-4">
                  {todayAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{appointment.patient}</h3>
                            <p className="text-sm text-gray-600">{appointment.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span className="font-medium">{appointment.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button variant="success" size="small">
                          Start Consultation
                        </Button>
                        <Button variant="secondary" size="small">
                          View History
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No appointments scheduled for today</p>
                </div>
              )}
            </Card>
          </div>

          {/* Quick Info */}
          <div className="space-y-6">
            {/* Schedule Summary */}
            <Card className="bg-gradient-to-br from-primary to-primary-dark text-white">
              <h3 className="text-lg font-semibold mb-4">Schedule Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Total Slots</span>
                  <span className="text-2xl font-bold">20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Booked</span>
                  <span className="text-2xl font-bold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Available</span>
                  <span className="text-2xl font-bold">12</span>
                </div>
              </div>
              <Link to="/doctor/schedule">
                <Button variant="secondary" fullWidth className="mt-4">
                  Manage Slots
                </Button>
              </Link>
            </Card>

            {/* Recent Activity */}
            <Card>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900 font-medium">Completed consultation</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900 font-medium">New appointment booked</p>
                    <p className="text-xs text-gray-500">3 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900 font-medium">Updated availability</p>
                    <p className="text-xs text-gray-500">Yesterday</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DoctorDashboard
