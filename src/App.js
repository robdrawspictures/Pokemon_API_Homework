import React, {useEffect, useState} from 'react';
import './App.css';
import logo from './poke_logo.png';

function App() {
  const [mew, setMew] = useState({});

  useEffect(() => {
    getMew()
  }, [])

  const getMew = function() {
    fetch("https://pokeapi.co/api/v2/pokemon/mew")
    .then(result => result.json())
    .then((data) => {
      console.log(data)
      setMew(data)})

    console.log(mew)
    console.log(mew.name)
    console.log(mew.height)
  }

  const Mew = () => {
    return (
      <>
      <img src={mew.sprites.other["official-artwork"].front_default} alt="Mew" width="255"/>
      <div id="poke-info">
        <h1>Name: {mew.name}</h1>
        <h1>EXP: {mew.base_experience}</h1>
        <h1>No.{mew.id}</h1>
        <h1>Height: {mew.height}</h1>
        <h1>Weight: {mew.weight}</h1>
      </div>
      </>
    )
  }

  return (
    <div id="poke-container">
    <img id="logo" src={logo} alt="logo" width="500"/>
    <button onClick={getMew}>Mew</button>
    {mew ? <Mew/> : null}
    </div>
  );
}

export default App;
