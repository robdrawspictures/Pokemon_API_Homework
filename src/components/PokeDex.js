import React from "react";
import Pokemon from "./Pokemon";

const PokeDex = ({pokedex}) => {

    const pokeMen = pokedex.map((pokemon, index) => {
        return (
            <Pokemon
                name = {pokemon.name}
                number = {index + 1}
                image = {pokemon.sprites.other["official-artwork"].front_default}
                
                />
        )
    })

    return(
        <ul>
            {pokeMen}
        </ul>
    )
}

export default PokeDex;