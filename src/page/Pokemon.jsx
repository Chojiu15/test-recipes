import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Pokemon = () => {
    let { pokemonID } = useParams()
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchPokemon = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
            setPokemon(response.data)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    return (
        <>
            {pokemon && !loading && (
                <>
                    <h1>Pokemon  {pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </>
            )}

        </>
    )
}


export default Pokemon