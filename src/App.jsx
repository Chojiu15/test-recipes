import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'


const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=150'


function App() {
  const [pokemons, setPokemons] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  const fetchPokemons = async () => {
    try {
      const response = await axios.get(API_URL)
      setPokemons(response.data.results)
    }
    catch (err) {
      setError(err)
    }
    finally {
      setLoading(false)
    }
  }

  const getPokemonID = (url) => {
    let id = url.split('/')[6]
    return id
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <>
      <h1>Welcome to my pokedex</h1>
      {pokemons && !loading && pokemons.map((pokemon, index) => {
          return(
            <div key={index} className='border-solid border-2	rounded border-blue-400 mb-6 '>  
                <Link to={`/pokemon/${getPokemonID(pokemon.url)}`} ><p>{pokemon.name}</p></Link>
            </div>
          )
      })
      }
    </>
  )
}

export default App
