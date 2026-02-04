import { Search } from 'lucide-react'
import { useState } from 'react'

function SearchBar({ 
  placeholder = 'Search...', 
  onSearch,
  className = '' 
}) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchTerm)
    }
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <form onSubmit={handleSearch} className={`w-full ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 shadow-md hover:shadow-lg"
        />
        <button
          type="submit"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors duration-300"
        >
          <Search className="h-6 w-6" />
        </button>
      </div>
    </form>
  )
}

export default SearchBar