import { useState } from 'react'
import { Search } from 'lucide-react'
import Layout from '../components/common/Layout'
import DoctorCard from '../components/search/DoctorCard'
import FilterPanel from '../components/search/FilterPanel'
import SearchBar from '../components/common/SearchBar'
import { mockDoctors } from '../data/mockDoctors'
import { areas, specialties } from '../data/specialties'

function FindDoctor() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArea, setSelectedArea] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')

  // Filter doctors based on search and filters
  const filteredDoctors = mockDoctors.filter((doctor) => {
    const matchesSearch = 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.area.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesArea = !selectedArea || doctor.area === selectedArea

    const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty

    return matchesSearch && matchesArea && matchesSpecialty
  })

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary-light to-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Find a Doctor
            </h1>
            <p className="text-lg text-gray-600">
              Search by doctor name, specialty, hospital, or location
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto animate-slideInUp">
            <SearchBar
              placeholder="Search doctors, specialties, hospitals, or areas..."
              onSearch={handleSearch}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <FilterPanel
              selectedArea={selectedArea}
              setSelectedArea={setSelectedArea}
              selectedSpecialty={selectedSpecialty}
              setSelectedSpecialty={setSelectedSpecialty}
              areas={areas}
              specialties={specialties}
              showSpecialtyFilter={true}
            />
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredDoctors.length} {filteredDoctors.length === 1 ? 'Doctor' : 'Doctors'} Found
              </h2>
            </div>

            {/* Doctor Cards */}
            {filteredDoctors.length > 0 ? (
              <div className="space-y-6">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No doctors found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FindDoctor