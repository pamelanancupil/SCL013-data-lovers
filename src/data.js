// FUNCIÓN FILTRAR POR TIPO DE POKÉMON
import pokeData from './data/pokemon/pokemon.js';

export const filterType=(pokeData, pokeFilter )=> {
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

//FUNCIÓN FILTRAR CARAMELOS
export let filterCandy = (dataPoke, candyKanto) => {
  return dataPoke.filter(poke => poke.candy_count == candyKanto);
};

/*FUNCION BUSCAR POKÉMON*/
 export const searchPoke = (pokeData, textPokeName)=>{
   const searchFinished = pokeData.filter((pokemon) => {
   return pokemon.name.includes(textPokeName);
  });
  return searchFinished; //Busqueda terminada
 };