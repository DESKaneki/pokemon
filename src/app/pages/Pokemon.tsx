import { useEffect, useState } from "react"
import { Character } from "../components/character"
import { getPokemons } from "../API/pokemon"

export const Pokemon = () => {
    const [pokemon, setPokemon] = useState<any>([])
    const [pages, setPages] = useState<number>()
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
    useEffect(() => {
        (async () => {
          try {
            if(pokemon && pokemon.length == 0) {
                const results = await getPokemons(url);
                setPokemon(results);
                setPages(Math.ceil(results.length / 10))
            }
          } catch (err) {
            console.log('Error occured when fetching pokemons');
          }
        })();
      }, []);
    return (
        <div>
           {pokemon.length > 0 && <Character pokemon={pokemon} pages={pages}></Character>}
        </div>
    )
}