import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FindHospital from './pages/FindHospital'
import FindDoctor from './pages/FindDoctor'
import Login from './pages/Login'
import Register from './pages/Register'
import BookAppointment from './pages/BookAppointment'
import HospitalRegistration from './pages/HospitalRegistration'
import DoctorDetail from './pages/DoctorDetail'
import HospitalDetail from './pages/HospitalDetail'
import PatientDashboard from './pages/patient/PatientDashboard'
import PatientProfile from './pages/patient/PatientProfile'
import PatientAppointments from './pages/patient/PatientAppointments'
import MedicalRecords from './pages/patient/MedicalRecords'
import DoctorDashboard from './pages/doctor/DoctorDashboard'
import DoctorProfile from './pages/doctor/DoctorProfile'
import AdminDashboard from './pages/admin/AdminDashboard'
import ProtectedRoute from './components/auth/ProtectedRoute'

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/find-hospital" element={<FindHospital />} />
      <Route path="/find-doctor" element={<FindDoctor />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/book-appointment/:doctorId" element={<BookAppointment />} />
      <Route path="/hospital-registration" element={<HospitalRegistration />} />
      <Route path="/doctor/:doctorId" element={<DoctorDetail />} />
      <Route path="/hospital/:hospitalId" element={<HospitalDetail />} />
      
      {/* Patient Routes */}
      <Route
        path="/patient/dashboard"
        element={
          <ProtectedRoute requiredRole="patient">
            <PatientDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patient/profile"
        element={
          <ProtectedRoute requiredRole="patient">
            <PatientProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patient/appointments"
        element={
          <ProtectedRoute requiredRole="patient">
            <PatientAppointments />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patient/medical-records"
        element={
          <ProtectedRoute requiredRole="patient">
            <MedicalRecords />
          </ProtectedRoute>
        }
      />

      {/* Doctor Routes */}
      <Route
        path="/doctor/dashboard"
        element={
          <ProtectedRoute requiredRole="doctor">
            <DoctorDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/doctor/profile"
        element={
          <ProtectedRoute requiredRole="doctor">
            <DoctorProfile />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default AppRoutes

