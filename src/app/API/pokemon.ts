import axios from "axios";



export const getPokemons = async(url: string) => {
    let pokemons: any = []
    const response = await axios.get(url);

    response.data.results.forEach((pokemon: any, index: number) => {
        pokemons = [...pokemons,  pokemon.name]
    });
    const sorted_pokemon = pokemons.sort();
    pokemons = []
    sorted_pokemon.forEach((pokemon: any, index: number) => {
        pokemons = [...pokemons, {name: pokemon, index: index + 1}]
    });
    return pokemons;
}
