// FUNCIÓN FILTRAR POR TIPO DE POKÉMON
import pokeData from './data/pokemon/pokemon.js';

export const filterData=(pokeData, pokeFilter )=> {
  const result = pokeData.filter((pokemon) => {
    return pokemon.type.includes(pokeFilter);
  });
  return result;
};

// FUNCIÓN FILTRAR POR HUEVOS
export const filterEgg = (pokeData,pokeFilter) => {
  const result = pokeData.filter((pokemon) => {
    return pokemon.egg.includes(pokeFilter);
  });
  return result;
};
