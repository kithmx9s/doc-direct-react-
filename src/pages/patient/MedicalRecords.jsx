import { useState } from 'react'
import { FileText, Download, Eye, Lock, Unlock, User, Calendar } from 'lucide-react'
import Layout from '../../components/common/Layout'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'

function MedicalRecords() {
  const [activeTab, setActiveTab] = useState('all') // all, diagnoses, prescriptions, lab-results, visits

  const records = {
    all: [
      {
        id: 1,
        type: 'Diagnosis',
        title: 'Hypertension Management',
        doctor: 'Dr. Amal Silva',
        hospital: 'National Hospital of Sri Lanka',
        date: '2026-02-01',
        description: 'Blood pressure monitored. Medication adjusted.',
        hasAccess: true,
      },
      {
        id: 2,
        type: 'Prescription',
        title: 'Blood Pressure Medication',
        doctor: 'Dr. Amal Silva',
        hospital: 'National Hospital of Sri Lanka',
        date: '2026-02-01',
        description: 'Amlodipine 5mg - Once daily',
        hasAccess: true,
      },
      {
        id: 3,
        type: 'Lab Result',
        title: 'Complete Blood Count',
        doctor: 'Dr. Kasun Perera',
        hospital: 'National Hospital of Sri Lanka',
        date: '2026-01-28',
        description: 'All values within normal range',
        hasAccess: true,
      },
      {
        id: 4,
        type: 'Visit Note',
        title: 'Annual Checkup',
        doctor: 'Dr. Priya Fernando',
        hospital: 'National Hospital of Sri Lanka',
        date: '2026-01-15',
        description: 'General health assessment - All normal',
        hasAccess: false,
      },
    ],
  }

  const [accessPermissions, setAccessPermissions] = useState([
    {
      id: 1,
      doctor: 'Dr. Amal Silva',
      specialty: 'Cardiology',
      hospital: 'National Hospital of Sri Lanka',
      grantedDate: '2026-01-20',
      hasAccess: true,
    },
    {
      id: 2,
      doctor: 'Dr. Kasun Perera',
      specialty: 'Neurology',
      hospital: 'National Hospital of Sri Lanka',
      grantedDate: '2026-01-28',
      hasAccess: true,
    },
  ])

  const toggleAccess = (doctorId) => {
    setAccessPermissions(prev =>
      prev.map(permission =>
        permission.id === doctorId
          ? { ...permission, hasAccess: !permission.hasAccess }
          : permission
      )
    )
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'Diagnosis':
        return 'bg-primary/10 text-primary'
      case 'Prescription':
        return 'bg-success/10 text-success'
      case 'Lab Result':
        return 'bg-info/10 text-info'
      case 'Visit Note':
        return 'bg-warning/10 text-warning'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary-light to-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Medical Records</h1>
          <p className="text-gray-600 text-lg">View and manage your health records</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Medical Records */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Records</h2>

              {records.all.length > 0 ? (
                <div className="space-y-4">
                  {records.all.map((record) => (
                    <div
                      key={record.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(record.type)}`}>
                              {record.type}
                            </span>
                            <span className="text-xs text-gray-500">
                              {new Date(record.date).toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-1">{record.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{record.description}</p>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <User className="h-4 w-4" />
                            <span>{record.doctor} • {record.hospital}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="secondary" size="small" icon={Eye}>
                          View Details
                        </Button>
                        <Button variant="ghost" size="small" icon={Download}>
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No medical records yet</p>
                </div>
              )}
            </Card>
          </div>

          {/* Access Permissions */}
          <div>
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Access Permissions</h3>
              <p className="text-sm text-gray-600 mb-6">
                Manage which doctors can view your medical records
              </p>

              <div className="space-y-4">
                {accessPermissions.map((permission) => (
                  <div
                    key={permission.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{permission.doctor}</h4>
                        <p className="text-sm text-gray-600">{permission.specialty}</p>
                        <p className="text-xs text-gray-500 mt-1">{permission.hospital}</p>
                      </div>
                      <button
                        onClick={() => toggleAccess(permission.id)}
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                          permission.hasAccess
                            ? 'bg-success/10 text-success hover:bg-success/20'
                            : 'bg-error/10 text-error hover:bg-error/20'
                        }`}
                      >
                        {permission.hasAccess ? (
                          <Unlock className="h-5 w-5" />
                        ) : (
                          <Lock className="h-5 w-5" />
                        )}
                      </button>
                    </div>

                    <div className="text-xs text-gray-500">
                      Granted: {new Date(permission.grantedDate).toLocaleDateString()}
                    </div>

                    <div className="mt-3">
                      {permission.hasAccess ? (
                        <button
                          onClick={() => toggleAccess(permission.id)}
                          className="text-sm text-error hover:text-error/80 font-medium"
                        >
                          Revoke Access
                        </button>
                      ) : (
                        <button
                          onClick={() => toggleAccess(permission.id)}
                          className="text-sm text-success hover:text-success/80 font-medium"
                        >
                          Grant Access
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Info Card */}
            <Card className="mt-6 bg-primary-light">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Your Privacy Matters</h4>
                  <p className="text-sm text-gray-600">
                    You have full control over who can access your medical records. Grant or revoke access anytime.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MedicalRecords

