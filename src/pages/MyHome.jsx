import React, { useState } from 'react'
import PokemonData from '../components/PokemonData'
import Search from '../components/Search'
import { fetchPokemon } from '../Service/getPokemon'

export default function MyHome() {
    const [pokemon,setPokemon] = useState()
    const [loading,setLoading] = useState(false)

    const getPokemon = async (query) =>{
        setLoading(true)
        const response = await fetchPokemon(query)
        const results = await response.json();
        setPokemon(results)
        setLoading(false)
    }
  return (
      <>
        <Search getPokemon={getPokemon} />
        { !loading && pokemon ? (
            <PokemonData 
            name={pokemon.name}
            sprites={pokemon.sprites.front_shiny}
            abilities={pokemon.abilities}
            stats={pokemon.stats}
            types={pokemon.types} />
        ):null}
    </>
  )
}
