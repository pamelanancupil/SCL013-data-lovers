/*import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);*/
import data from './data/pokemon/pokemon.js';
import { filterData } from './data.js';

/*BOTÓN COMENZAR*/ 
document.getElementById("start").addEventListener("click", ()=>{
    document.getElementById("homePage").style.display="none";
    document.getElementById("pokedex").style.display="flex";
    });
  document.getElementById("logoHeader").addEventListener("click", ()=>{
    document.getElementById("homePage").style.display="block";
    document.getElementById("pokedex").style.display="flex";
  });

/*PRUEBA 01*/ 
const container = document.getElementById("box");

let datos = data.pokemon;
let condition = [];

let result = filterData(data, condition);

for(let i=0; i<datos.length;i++){
container.innerHTML +=`<div class="card"><h3>${datos[i].num}</h3>
                      <img src="${datos[i].img}">
                      <p>${datos[i].name}</p></div>`
}