import { Link } from 'react-router-dom'
import { Search, Hospital, Stethoscope, Calendar, FileText, Shield, Clock } from 'lucide-react'
import Layout from '../components/common/Layout'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import SearchBar from '../components/common/SearchBar'

function Home() {
  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm)
    // Will implement actual search later
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light via-white to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Your Direct Path to Healthcare
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Connect with the best doctors and hospitals near you. Book appointments instantly and manage your health records securely.
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto mb-8 animate-slideInUp">
              <SearchBar 
                placeholder="Search for doctors, hospitals, or specialties..."
                onSearch={handleSearch}
              />
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideInUp">
              <Link to="/find-hospital">
                <Button variant="primary" size="large" icon={Hospital}>
                  Find Hospital
                </Button>
              </Link>
              <Link to="/find-doctor">
                <Button variant="secondary" size="large" icon={Stethoscope}>
                  Find Doctor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Doc Direct?
            </h2>
            <p className="text-xl text-gray-600">
              Your health is our priority. Here's what makes us different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="text-center">
              <div className="bg-primary-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Search</h3>
              <p className="text-gray-600">
                Find doctors and hospitals by specialty, location, or name with our powerful search engine.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="text-center">
              <div className="bg-success/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Booking</h3>
              <p className="text-gray-600">
                Book appointments instantly with real-time availability. No more waiting on hold.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="text-center">
              <div className="bg-doctor/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-doctor" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Medical Records</h3>
              <p className="text-gray-600">
                Access your complete medical history anytime, anywhere. Share with doctors securely.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="text-center">
              <div className="bg-patient/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-patient" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
              <p className="text-gray-600">
                Your data is encrypted and protected. You control who sees your medical information.
              </p>
            </Card>

            {/* Feature 5 */}
            <Card className="text-center">
              <div className="bg-hospital/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-hospital" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Access</h3>
              <p className="text-gray-600">
                Access healthcare services anytime. Emergency information always at your fingertips.
              </p>
            </Card>

            {/* Feature 6 */}
            <Card className="text-center">
              <div className="bg-warning/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Hospital className="h-8 w-8 text-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Wide Network</h3>
              <p className="text-gray-600">
                Connected with hundreds of hospitals and thousands of qualified doctors nationwide.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Getting started is easy. Just follow these simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-primary text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Search</h3>
              <p className="text-gray-600">
                Find the perfect doctor or hospital based on your needs, location, and specialty.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-primary text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Book</h3>
              <p className="text-gray-600">
                Select an available time slot and book your appointment instantly with just a few clicks.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-primary text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Visit</h3>
              <p className="text-gray-600">
                Attend your appointment and get the care you need. Access your records anytime after.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of patients who trust Doc Direct for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="secondary" size="large">
                Register as Patient
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="ghost" size="large" className="bg-white/10 text-white hover:bg-white hover:text-primary border-2 border-white">
                Register as Doctor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Hospitals</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5000+</div>
              <div className="text-gray-600">Doctors</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</div>
              <div className="text-gray-600">Patients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100K+</div>
              <div className="text-gray-600">Appointments</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home