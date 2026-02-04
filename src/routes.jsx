import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* More routes will be added here */}
    </Routes>
  )
}

export default AppRoutes