import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FindHospital from './pages/FindHospital'
import FindDoctor from './pages/FindDoctor'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-hospital" element={<FindHospital />} />
      <Route path="/find-doctor" element={<FindDoctor />} />
      {/* More routes will be added here */}
    </Routes>
  )
}

export default AppRoutes