
import { Link } from 'react-router-dom'
import { Home, Search } from 'lucide-react'
import Layout from '../components/common/Layout'
import Button from '../components/common/Button'

function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-light to-white flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="primary" size="large" icon={Home}>
                Back to Home
              </Button>
            </Link>
            <Link to="/find-doctor">
              <Button variant="secondary" size="large" icon={Search}>
                Find a Doctor
              </Button>
            </Link>
          </div>

          <div className="mt-12 p-6 bg-white rounded-xl shadow-card">
            <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you believe this is an error, please contact our support team.
            </p>
            <Link to="/contact" className="text-primary hover:text-primary-dark font-medium">
              Contact Support →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound