import React, {useEffect, useState} from "react";
import PokeDex from "../components/PokeDex";

function PokeContainer() {
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        getPokedex();
    }, [])

    const getPokedex = function() {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
        .then(result => result.json())
        .then((allPokemon) => {
            allPokemon.results.forEach((pokemon) => {
                getPokemonData(pokemon); 
            });
        })
    }

    const getPokemonData = function(pokemon) {
        let source = pokemon.url
        let pokeList = []

        fetch(source)
        .then(result => result.json())
        .then(pokeData => setPokedex(pokeData))

        console.log(pokedex)
    }

    return (
        <h1>Testing, Testing.</h1>

        // <>
        // <h2>This is the PokeDex</h2>
        // {pokedex ? <PokeDex pokedex={pokedex}/> : null}
        // </>
    )
}

export default PokeContainer;