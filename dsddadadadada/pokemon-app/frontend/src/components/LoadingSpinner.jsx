import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Загружаем покемонов...</p>
    </div>
  )
}

export default LoadingSpinner