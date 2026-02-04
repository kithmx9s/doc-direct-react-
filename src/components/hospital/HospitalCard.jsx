import { MapPin, Phone, Star, Clock, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../common/Card'
import Button from '../common/Button'

function HospitalCard({ hospital }) {
  return (
    <Card className="overflow-hidden">
      {/* Hospital Image */}
      <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <Star className="h-4 w-4 text-warning fill-warning" />
          <span className="font-semibold">{hospital.rating}</span>
          <span className="text-sm text-gray-500">({hospital.totalReviews})</span>
        </div>
      </div>

      {/* Hospital Info */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{hospital.name}</h3>

      <div className="space-y-2 mb-4">
        <div className="flex items-start gap-2 text-gray-600">
          <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
          <span className="text-sm">{hospital.address}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Phone className="h-4 w-4 text-primary" />
          <span className="text-sm">{hospital.phone}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="h-4 w-4 text-primary" />
          <span className="text-sm">{hospital.operatingHours}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Users className="h-4 w-4 text-primary" />
          <span className="text-sm">{hospital.doctors.length} Doctors Available</span>
        </div>
      </div>

      {/* Specialties */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Specialties:</h4>
        <div className="flex flex-wrap gap-2">
          {hospital.availableSpecialties.slice(0, 3).map((specialty) => (
            <span
              key={specialty}
              className="text-xs bg-primary-light text-primary px-3 py-1 rounded-full"
            >
              {specialty}
            </span>
          ))}
          {hospital.availableSpecialties.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              +{hospital.availableSpecialties.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Action Button */}
      <Link to={`/hospital/${hospital.id}`}>
        <Button variant="primary" fullWidth>
          View Details
        </Button>
      </Link>
    </Card>
  )
}

export default HospitalCard
