
import { useState } from 'react'
import { Hospital, CheckCircle, XCircle, Clock, TrendingUp, Users, Building } from 'lucide-react'
import Layout from '../../components/common/Layout'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('pending') // pending, approved, rejected

  const stats = [
    { label: 'Pending Requests', value: 5, icon: Clock, color: 'bg-warning' },
    { label: 'Approved Hospitals', value: 28, icon: CheckCircle, color: 'bg-success' },
    { label: 'Total Doctors', value: 342, icon: Users, color: 'bg-primary' },
    { label: 'Total Patients', value: 1240, icon: TrendingUp, color: 'bg-info' },
  ]

  const requests = {
    pending: [
      {
        id: 1,
        hospitalName: 'City Care Hospital',
        area: 'Colombo',
        beds: 150,
        adminName: 'Dr. Sarah Johnson',
        email: 'admin@citycare.lk',
        phone: '0112345678',
        submittedDate: '2026-02-05',
        specialties: ['Cardiology', 'Neurology', 'Pediatrics'],
        services: ['24/7 Emergency', 'ICU', 'Laboratory'],
      },
      {
        id: 2,
        hospitalName: 'Green Valley Medical Center',
        area: 'Kandy',
        beds: 80,
        adminName: 'Mr. Rohan Silva',
        email: 'info@greenvalley.lk',
        phone: '0812234567',
        submittedDate: '2026-02-04',
        specialties: ['Orthopedics', 'Surgery', 'Gynecology'],
        services: ['Ambulance Service', 'Pharmacy', 'Blood Bank'],
      },
    ],
    approved: [
      {
        id: 3,
        hospitalName: 'National Hospital of Sri Lanka',
        area: 'Colombo',
        beds: 3000,
        approvedDate: '2026-01-15',
      },
    ],
    rejected: [],
  }

  const currentRequests = requests[activeTab]

  const handleApprove = (id) => {
    if (window.confirm('Are you sure you want to approve this hospital?')) {
      alert(`Hospital ID ${id} has been approved!`)
      // In real app, this would update the database
    }
  }

  const handleReject = (id) => {
    if (window.confirm('Are you sure you want to reject this hospital registration?')) {
      alert(`Hospital ID ${id} has been rejected.`)
      // In real app, this would update the database
    }
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary-light to-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 text-lg">Manage hospital registrations and system overview</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
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

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'pending'
                ? 'bg-warning text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Clock className="h-5 w-5" />
            Pending ({requests.pending.length})
          </button>
          <button
            onClick={() => setActiveTab('approved')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'approved'
                ? 'bg-success text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <CheckCircle className="h-5 w-5" />
            Approved ({requests.approved.length})
          </button>
          <button
            onClick={() => setActiveTab('rejected')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'rejected'
                ? 'bg-error text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <XCircle className="h-5 w-5" />
            Rejected ({requests.rejected.length})
          </button>
        </div>

        {/* Requests List */}
        {currentRequests.length > 0 ? (
          <div className="space-y-6">
            {currentRequests.map((request) => (
              <Card key={request.id}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-hospital/10 p-3 rounded-lg">
                      <Hospital className="h-8 w-8 text-hospital" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {request.hospitalName}
                      </h3>
                      <p className="text-gray-600">{request.area}</p>
                    </div>
                  </div>
                  {activeTab === 'pending' && (
                    <span className="px-3 py-1 bg-warning/10 text-warning text-sm font-medium rounded-full">
                      Pending Review
                    </span>
                  )}
                  {activeTab === 'approved' && (
                    <span className="px-3 py-1 bg-success/10 text-success text-sm font-medium rounded-full">
                      Approved
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Beds Capacity</p>
                    <p className="font-semibold text-gray-900">{request.beds} beds</p>
                  </div>
                  {request.adminName && (
                    <div>
                      <p className="text-sm text-gray-500">Admin Contact</p>
                      <p className="font-semibold text-gray-900">{request.adminName}</p>
                      <p className="text-sm text-gray-600">{request.email}</p>
                      <p className="text-sm text-gray-600">{request.phone}</p>
                    </div>
                  )}
                  {request.submittedDate && (
                    <div>
                      <p className="text-sm text-gray-500">Submitted On</p>
                      <p className="font-semibold text-gray-900">
                        {new Date(request.submittedDate).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                  {request.approvedDate && (
                    <div>
                      <p className="text-sm text-gray-500">Approved On</p>
                      <p className="font-semibold text-gray-900">
                        {new Date(request.approvedDate).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>

                {request.specialties && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {request.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-3 py-1 bg-primary-light text-primary text-xs font-medium rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {request.services && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Services</p>
                    <div className="flex flex-wrap gap-2">
                      {request.services.map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'pending' && (
                  <div className="flex gap-3 mt-6">
                    <Button
                      variant="success"
                      onClick={() => handleApprove(request.id)}
                      icon={CheckCircle}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleReject(request.id)}
                      icon={XCircle}
                    >
                      Reject
                    </Button>
                    <Button variant="secondary">View Full Details</Button>
                  </div>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <Building className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No {activeTab} requests
            </h3>
            <p className="text-gray-500">
              {activeTab === 'pending' && 'All hospital registrations have been reviewed'}
              {activeTab === 'approved' && 'No approved hospitals yet'}
              {activeTab === 'rejected' && 'No rejected requests'}
            </p>
          </Card>
        )}
      </div>
    </Layout>
  )
}

export default AdminDashboard