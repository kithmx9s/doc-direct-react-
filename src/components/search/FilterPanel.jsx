import { Filter } from 'lucide-react'

function FilterPanel({ 
  selectedArea, 
  setSelectedArea, 
  selectedSpecialty, 
  setSelectedSpecialty,
  areas = [],
  specialties = [],
  showSpecialtyFilter = true 
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-card">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Filters</h3>
      </div>

      {/* Area Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Area / Location
        </label>
        <select
          value={selectedArea}
          onChange={(e) => setSelectedArea(e.target.value)}
          className="input-field"
        >
          <option value="">All Areas</option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      {/* Specialty Filter (only for doctor search) */}
      {showSpecialtyFilter && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Specialty
          </label>
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="input-field"
          >
            <option value="">All Specialties</option>
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        onClick={() => {
          setSelectedArea('')
          setSelectedSpecialty && setSelectedSpecialty('')
        }}
        className="w-full btn-secondary"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FilterPanel
