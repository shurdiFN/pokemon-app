import React, { useState } from 'react'

const SearchBox = ({ onSearch, placeholder = "Поиск..." }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setSearchTerm('')
    onSearch('')
  }

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange}
        />
        {searchTerm && (
          <button className="clear-button" onClick={clearSearch}>
            ×
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBox