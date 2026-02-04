import { useState } from 'react'
import { Search } from 'lucide-react'
import Layout from '../components/common/Layout'
import HospitalCard from '../components/hospital/HospitalCard'
import FilterPanel from '../components/search/FilterPanel'
import SearchBar from '../components/common/SearchBar'
import { mockHospitals } from '../data/mockHospitals'
import { areas, specialties } from '../data/specialties'

function FindHospital() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArea, setSelectedArea] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')

  // Filter hospitals based on search and filters
  const filteredHospitals = mockHospitals.filter((hospital) => {
    const matchesSearch = 
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.doctors.some(doctor => doctor.toLowerCase().includes(searchTerm.toLowerCase())) ||
      hospital.area.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesArea = !selectedArea || hospital.area === selectedArea

    const matchesSpecialty = !selectedSpecialty || 
      hospital.availableSpecialties.includes(selectedSpecialty)

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
              Find a Hospital
            </h1>
            <p className="text-lg text-gray-600">
              Search by hospital name, doctor name, or location
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto animate-slideInUp">
            <SearchBar
              placeholder="Search hospitals, doctors, or areas..."
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
                {filteredHospitals.length} {filteredHospitals.length === 1 ? 'Hospital' : 'Hospitals'} Found
              </h2>
            </div>

            {/* Hospital Cards */}
            {filteredHospitals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredHospitals.map((hospital) => (
                  <HospitalCard key={hospital.id} hospital={hospital} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No hospitals found
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

export default FindHospital