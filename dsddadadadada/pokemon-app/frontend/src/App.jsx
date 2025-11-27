import { useState, useEffect } from 'react'
import PokemonCard from './components/PokemonCard'
import LoadingSpinner from './components/LoadingSpinner'
import SearchBox from './components/SearchBox'
import './App.css'

const mockPokemons = [
  { id: 1, name: "Pikachu", type: "electric", description: "When several of these Pokémon gather, their electricity could build and cause lightning storms.", height: 0.4, weight: 6.0 },
  { id: 2, name: "Charizard", type: "fire", description: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.", height: 1.7, weight: 90.5 },
  { id: 3, name: "Bulbasaur", type: "grass", description: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.", height: 0.7, weight: 6.9 },
  { id: 4, name: "Squirtle", type: "water", description: "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.", height: 0.5, weight: 9.0 },
  { id: 5, name: "Jigglypuff", type: "fairy", description: "When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.", height: 0.5, weight: 5.5 },
  { id: 6, name: "Gengar", type: "ghost", description: "Under a full moon, this Pokémon likes to mimic the shadows of people and laugh at their fright.", height: 1.5, weight: 40.5 }
]

function App() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setPokemons(mockPokemons)
      setLoading(false)
    }, 1500)
  }, [])

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const getRandomPokemon = () => {
    const randomPokemon = mockPokemons[Math.floor(Math.random() * mockPokemons.length)]
    alert(`Случайный покемон: ${randomPokemon.name} - ${randomPokemon.description}`)
  }

  const filteredPokemons = pokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pokemon.type.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="App">
      <header className="app-header">
        <h1>⚡ Pokedex - Энциклопедия покемонов!</h1>
      </header>

      <div className="app-controls">
        <SearchBox onSearch={handleSearch} placeholder="Поиск покемона или типа..." />
        <button onClick={getRandomPokemon} className="random-pokemon-btn">
          Случайный покемон
        </button>
      </div>

      <main className="pokemon-container">
        {loading ? (
          <LoadingSpinner />
        ) : filteredPokemons.length > 0 ? (
          <div className="pokemon-grid">
            {filteredPokemons.map((pokemon, index) => (
              <PokemonCard 
                key={pokemon.id} 
                pokemon={pokemon} 
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="no-pokemons">
            <p>Покемоны не найдены</p>
            <button onClick={() => setPokemons(mockPokemons)} className="retry-btn">
              Показать всех покемонов
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

export default App