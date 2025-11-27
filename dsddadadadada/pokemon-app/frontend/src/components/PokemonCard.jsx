import React from 'react'

const PokemonCard = ({ pokemon, index }) => {
  const getTypeColor = (type) => {
    const colors = {
      electric: '#FFD700',
      fire: '#FF4500',
      water: '#1E90FF',
      grass: '#32CD32',
      fairy: '#FF69B4',
      ghost: '#483D8B'
    }
    return colors[type] || '#666'
  }

  return (
    <div 
      className="pokemon-card"
      style={{ borderLeftColor: getTypeColor(pokemon.type) }}
    >
      <div className="pokemon-header">
        <h3 className="pokemon-name">{pokemon.name}</h3>
        <span 
          className="pokemon-type"
          style={{ background: getTypeColor(pokemon.type) }}
        >
          {pokemon.type}
        </span>
      </div>
      <p className="pokemon-description">{pokemon.description}</p>
      <div className="pokemon-stats">
        <span>Рост: {pokemon.height}m</span>
        <span>Вес: {pokemon.weight}kg</span>
        <span>#{index + 1}</span>
      </div>
    </div>
  )
}

export default PokemonCard