import data from './data/pokemon/pokemon.js';
import { 
  filterData,
  filterEgg } from './data.js';

/*BOTÓN COMENZAR*/ 
document.getElementById("start").addEventListener("click", ()=>{
    document.getElementById("homePage").style.display="none";
    });
  document.getElementById("logoHeader").addEventListener("click", ()=>{
    document.getElementById("homePage").style.display="block";
  });

/*DATA INICIAL*/ 
const container = document.getElementById("box");
let pokeData = data.pokemon;
for(let i=0; i<pokeData.length;i++){
  container.innerHTML +=`<div class="card"><h3>${pokeData[i].num}</h3>
                        <img src="${pokeData[i].img}">
                        <p>${pokeData[i].name}</p></div>`
  }

// FUNCIÓN FILTRAR POR TIPO DE POKÉMON
const select = document.getElementById('selectPokeType');
select.addEventListener('change', () => {
  document.getElementById('box').innerHTML = '';
  const pokeFilter = selectPokeType.options[selectPokeType.selectedIndex].value;
  let pokeByType = '';
  if(pokeFilter === ''){
    pokeByType = pokeData;
    console.log("1",pokeFilter)
  }
  else{
    pokeByType= filterData(pokeData,pokeFilter);
     console.log("2",pokeFilter)
     console.log("3",pokeByType)

  for (let i = 0; i < pokeByType.length; i++) {
    document.getElementById('box').innerHTML += 
    `<div class="card"><h3>${pokeByType[i].num}</h3>
                      <img src="${pokeByType[i].img}">
                      <p><strong>${pokeByType[i].name}</strong></p>
                      <p>${pokeByType[i].type}</p></div>`;
                      }
  }
});

// FUNCIÓN FILTRAR POR HUEVOS
const selectedEgg = document.getElementById('selectPokeEgg');
selectedEgg.addEventListener('change', () => {
  document.getElementById('box').innerHTML = '';
  const pokeFilter = selectPokeEgg.options[selectPokeEgg.selectedIndex].value;
  let pokeByEgg = '';
  if(pokeFilter === ''){
    pokeByEgg = pokeData;
    console.log("1",pokeFilter)
  }
  else{
    pokeByEgg = (filterEgg(pokeData,pokeFilter));
     console.log("2",pokeFilter)
      console.log("3",pokeByEgg)
  for (let i = 0; i < pokeByEgg.length; i++) {
    document.getElementById('box').innerHTML += 
    `<div class="card"><h3>${pokeByEgg[i].num}</h3>
                      <img src="${pokeByEgg[i].img}">
                      <p><strong>${pokeByEgg[i].name}</strong></p>
                      <p>${pokeByEgg[i].egg}</p></div>`;
                      }
  }
});