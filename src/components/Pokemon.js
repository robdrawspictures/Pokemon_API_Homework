import React from "react";

const Pokemon = (pokemon) => {
    return (
        <img src={pokemon.image} alt={pokemon.name}/>
    )
}

export default Pokemon;