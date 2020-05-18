// FUNCIÓN FILTRAR POR TIPO DE POKÉMON
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
export const filterCandy = (pokeData, pokeFilter) => {
  return pokeData.filter(poke => poke.candy_count == pokeFilter);
};

//FUNCIÓN BUSCAR POKÉMON
export const searchPoke = (pokeData, textPokeName)=>{
  const searchFinished = pokeData.filter((pokemon) => {
  return pokemon.name.includes(textPokeName);
 });
 return searchFinished; //Busqueda terminada
};

//FUNCIÓN ORDENAR POR ALTURA
export const sortHeight = (pokeData, sortBy, sortOrder) => {
  const compare = pokeData.sort((a,b) => {
   return a[sortBy].localeCompare(b[sortBy]);
 });
 if (sortOrder === 'lowHigh') {
   return compare;
 }
 else{
   return compare.reverse();
 }
};

