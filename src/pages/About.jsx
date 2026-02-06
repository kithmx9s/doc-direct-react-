
import { Heart, Shield, Users, Award, Target, Zap } from 'lucide-react'
import Layout from '../components/common/Layout'
import Card from '../components/common/Card'

function About() {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'We prioritize your health and wellbeing above all else, ensuring compassionate and personalized care.',
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your medical data is encrypted and protected. You have full control over who accesses your information.',
    },
    {
      icon: Users,
      title: 'Trusted Network',
      description: 'All hospitals and doctors are verified and credentialed before joining our platform.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We maintain high standards for healthcare providers and continuously monitor service quality.',
    },
    {
      icon: Target,
      title: 'Accessibility',
      description: 'Making quality healthcare accessible to everyone, everywhere, at any time.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging technology to simplify healthcare and improve patient outcomes.',
    },
  ]

  const stats = [
    { value: '500+', label: 'Hospitals' },
    { value: '5,000+', label: 'Doctors' },
    { value: '50,000+', label: 'Patients' },
    { value: '100,000+', label: 'Appointments' },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-light to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Direct Path to Healthcare
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Doc Direct is Sri Lanka's leading hospital network platform, connecting patients 
            with trusted healthcare providers across the country. We're transforming how people 
            access healthcare by making it simple, transparent, and efficient.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Card className="bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
              To democratize healthcare access by creating a seamless connection between patients 
              and quality healthcare providers, empowering individuals to make informed decisions 
              about their health and wellbeing.
            </p>
          </div>
        </Card>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600">
            Numbers that tell our story
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2024, Doc Direct was born from a simple observation: accessing quality 
              healthcare shouldn't be complicated. We set out to create a platform that puts 
              patients first, making it easy to find trusted doctors, book appointments, and 
              manage health records—all in one place.
            </p>
          </div>

          <Card className="bg-primary-light">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Journey</h3>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're a patient seeking care, a doctor looking to expand your reach, 
                or a hospital wanting to join our network—we'd love to have you with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/register" className="btn-primary inline-block">
                  Get Started Today
                </a>
                <a href="/hospital-registration" className="btn-secondary inline-block">
                  Register Your Hospital
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default About
