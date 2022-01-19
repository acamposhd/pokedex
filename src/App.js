import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState({});

  const fetchPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  };

  const getRandomInt = (min = 1, max = 500) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    console.log({ pokemon });
  }, [pokemon]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-container">
          <img
            src={pokemon?.sprites?.back_default}
            className="poke-image"
            alt="logo"
          />
          <img
            src={pokemon?.sprites?.front_default}
            className="poke-image"
            alt="logo"
          />
        </div>
        <p>{pokemon.name ?? "NO POKEMON SELECTED"}</p>
        <p>{pokemon.id ?? "NO POKEMON SELECTED"}</p>
        <div className="flex-cotainer">
          <button className="button">Back</button>
          <button
            className="button"
            onClick={() => fetchPokemon(getRandomInt())}
          >
            Random
          </button>
          <button className="button">Next</button>
        </div>
      </header>
    </div>
  );
}

export default App;
