import { MapPin, Briefcase, Star, Hospital, Calendar, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../common/Card'
import Button from '../common/Button'

function DoctorCard({ doctor }) {
  const isAvailable = doctor.availableSlots > 0

  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Doctor Image */}
        <div className="relative">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-32 h-32 rounded-lg object-cover"
          />
          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <Star className="h-3 w-3 text-warning fill-warning" />
            <span className="text-sm font-semibold">{doctor.rating}</span>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
          <p className="text-primary font-medium mb-2">{doctor.specialty}</p>

          <div className="space-y-1 mb-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Hospital className="h-4 w-4 text-primary" />
              <span>{doctor.hospital}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{doctor.area}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Briefcase className="h-4 w-4 text-primary" />
              <span>{doctor.experience} years experience</span>
            </div>
          </div>

          {/* Availability Status */}
          {isAvailable ? (
            <div className="flex items-center gap-2 text-sm text-success mb-3">
              <Calendar className="h-4 w-4" />
              <span className="font-medium">{doctor.availableSlots} slots available</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm text-error mb-3">
              <AlertCircle className="h-4 w-4" />
              <span className="font-medium">Fully booked - No slots available</span>
            </div>
          )}

          {/* Qualifications */}
          <p className="text-xs text-gray-500 mb-3">{doctor.qualifications}</p>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Link to={`/doctor/${doctor.id}`} className="flex-1">
              <Button variant="secondary" fullWidth>
                View Profile
              </Button>
            </Link>
            {isAvailable && (
              <Link to={`/book-appointment/${doctor.id}`} className="flex-1">
                <Button variant="primary" fullWidth>
                  Book Now
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default DoctorCard