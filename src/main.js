import data from './data/pokemon/pokemon.js';
import { 
filterType,
filterEgg, 
filterCandy,
searchPoke,
sortHeight } from './data.js';

//BOTÓN COMENZAR
document.getElementById("start").addEventListener("click", ()=>{
    document.getElementById("homePage").style.display="none";
    });
  document.getElementById("logoHeader").addEventListener("click", ()=>{
    document.getElementById("homePage").style.display="block";
  });

// SE AGREGÓ location.reload() QUE REFRESCA TODA LA PÁGINA
document.getElementById("refresh").addEventListener("click", ()=>{
  location.reload();
 });  

//DATA INICIAL
const container = document.getElementById("box");
const pokeData = data.pokemon;

function showPokedex(pokeData){
for(let i=0; i<pokeData.length;i++){
  container.innerHTML +=`<div class="card"><h3 class="pokeNumber">${pokeData[i].num}</h3>
                        <img src="${pokeData[i].img}" class="clickImg">
                        <p class="pokeName">${pokeData[i].name}</p></div>`;
                        pokeModal(pokeData);
  }
}
showPokedex(pokeData);

//MODAL POKÉMON
function pokeModal(pokeData){
  let backgroundPokeModal= document.getElementById("backgroundModal");
  //let contentPokeModal= document.getElementById("contentModal");
  let clickPokeImg = document.getElementsByClassName("clickImg");
  
  backgroundPokeModal.style.display="none";
  
  for(let i=0; i<clickPokeImg.length; i++){
  let pokeImg = clickPokeImg[i];
  //let evolution = pokeData[i].next_evolution[i].name;
  pokeImg.addEventListener("click",() =>{
  let contentPokeModal= document.getElementById("backgroundModal");
  contentPokeModal.innerHTML="";
  backgroundPokeModal.style.display="block";
  
  contentPokeModal.innerHTML += 
  `<div class="cardModal">
  
  <div class="close"><span class="closeCard">&times;</span></div>
  
  <div class="firstInfo">
  <h3 class="pokeNumber">${pokeData[i].num}</h3>
  <img src="${pokeData[i].img}" class="clickImg">
  <p class="pokeName">${pokeData[i].name}</p>
  </div>
  
  <div class="secondInfo">
  <div class="frontLine">
  <div class="weightModal"><p class="weight"><strong>${pokeData[i].weight}<br></strong>Peso</p></div>
  <div class="vertical-line"></div>
  <div class="typeModal"><p class="type"><strong>${translate(pokeData[i].type)}<br></strong>Tipo</p></div>
  <div class="vertical-line"></div>
  <div class="heightModal"><p class="height"><strong>${pokeData[i].height}<br></strong>Altura</p></div>
  </div>
  
  <div class="horizontal-line"></div>
  
  <div class="secondLine">
  <div class= "eggDesign"><p class="egg"><img src="img/egg.png" width="15px"><strong> ${translateEgg(pokeData[i].egg)}</strong><br>Huevos</p></div>
  <div class= "candyDesign"><p class="candyCount"><strong><img src="img/candy.png" width="15px"> ${pokeData[i].candy_count ? pokeData[i].candy_count : "Máx.Evolución" }</strong><br>${pokeData[i].candy}</p>
  </div>
  </div>
  
  <div class="thirdLine">
  <p class="evolution"><strong>${pokeData[i].next_evolution ? pokeData[i].next_evolution[0].name : "Sin más"}</strong><br>Evolución</p>
  <p class="weaknesses"><strong>${translate(pokeData[i].weaknesses)}</strong><br>Debilidades</p>
  </div>
  
  <div class="btnOk">OK</div>
  </div>
  </div>
  </div>`;
  
  let close = document.getElementsByClassName("closeCard")[0];
  close.addEventListener("click",()=> {
  backgroundPokeModal.style.display="none";
  contentPokeModal.innerHTML="";
  });
  
  let btnOkPoke = document.getElementsByClassName("btnOk")[0];
  btnOkPoke.addEventListener("click",()=> {
  backgroundPokeModal.style.display="none";
  contentPokeModal.innerHTML="";
  });
  });
  }
  }

// FUNCIÓN FILTRAR POR TIPO DE POKÉMON
const select = document.getElementById('selectPokeType');
select.addEventListener('change', () => {
  document.getElementById('box').innerHTML = '';
  const pokeFilter = select.options[select.selectedIndex].value;
  document.getElementById('box').innerHTML =`<div class="subtitle"><h2>Tipos de Pokémon</h2></div>`
  let pokeByType = '';
  if(pokeFilter === ''){
    pokeByType = pokeData;
  }
  else{
    pokeByType= filterType(pokeData,pokeFilter);

  for (let i = 0; i < pokeByType.length; i++) {
    document.getElementById('box').innerHTML += 
    `<div class="card"><h3 class="pokeNumber">${pokeByType[i].num}</h3>
                      <img src="${pokeByType[i].img}" class="clickImg">
                      <p class="pokeName">${pokeByType[i].name}</p>
                      <p>${translate(pokeByType[i].type)}</p></div>`;
                      pokeModal(pokeByType);
                      }
  }
});

// FUNCIÓN FILTRAR POR HUEVOS
const selectedEgg = document.getElementById('selectPokeEgg');
selectedEgg.addEventListener('change', () => {
  document.getElementById('box').innerHTML = '';
  const pokeFilter = selectedEgg.options[selectedEgg.selectedIndex].value;
  document.getElementById('box').innerHTML =`<div class="subtitle"><h2>Huevos: Cantidad de km para incubar</h2></div>`
  let pokeByEgg = '';
  if(pokeFilter === ''){
    pokeByEgg = pokeData;
  }
  else{
    pokeByEgg = (filterEgg(pokeData,pokeFilter));
  for (let i = 0; i < pokeByEgg.length; i++) {
    document.getElementById('box').innerHTML += 
    `<div class="card"><h3 class="pokeNumber">${pokeByEgg[i].num}</h3>
                      <img src="${pokeByEgg[i].img}" class="clickImg">
                      <p class="pokeName">${pokeByEgg[i].name}</p>
                      <p>${translateEgg(pokeByEgg[i].egg)}</p></div>`;
                      pokeModal(pokeByEgg);
                      }
  }
});

// FUNCIÓN FILTRAR POR CARAMELOS
const selectedCandy = document.getElementById('selectPokeCandy');
selectedCandy.addEventListener('change', () => {
  document.getElementById('box').innerHTML = '';
  const pokeFilter = selectedCandy.options[selectedCandy.selectedIndex].value;
  document.getElementById('box').innerHTML =`<div class="subtitle"><h2>Caramelos: Cantidad para evolucionar</h2></div>`
  let pokeByCandy = '';
  if(pokeFilter === ''){
    pokeByCandy = pokeData;
  }
  else{
    pokeByCandy = (filterCandy(pokeData,pokeFilter));
  for (let i = 0; i < pokeByCandy.length; i++) {
    document.getElementById('box').innerHTML += 
    `<div class="card"><h3 class="pokeNumber">${pokeByCandy[i].num}</h3>
                      <img src="${pokeByCandy[i].img}" class="clickImg">
                      <p class="pokeName">${pokeByCandy[i].name}</p>
                      <p>${pokeByCandy[i].candy_count} caramelos</p></div>`;
                      pokeModal(pokeByCandy);
                      }
  }
});

//FUNCIÓN BUSCAR POKÉMON POR NOMBRE
document.getElementById('searchPoke').addEventListener('click', () => {
  document.getElementById('box').innerHTML = '';
  const pokeName = document.getElementById('searchBar').value;
  const textPokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1).toLowerCase();
  let insertName = searchPoke(pokeData,textPokeName);
  for (let i = 0; i < insertName.length; i++){
     document.getElementById('box').innerHTML += 
    `<div class="card"><h3 class="pokeNumber">${insertName[i].num}</h3>
                      <img src="${insertName[i].img}" class="clickImg">
                      <p class="pokeName">${insertName[i].name}</p</div>`;
                      pokeModal(insertName);
                      
  }
});

// FUNCIÓN ORDENAR POR ALTURA
const pokeNumbers = document.getElementById ('selectPokeHeight');
pokeNumbers.addEventListener ('change',() => {
  const pokeValueHeight = document.getElementById ('selectPokeHeight').value;
  const finalSortHeight = sortHeight(pokeData, 'height', pokeValueHeight);
  document.getElementById('box').innerHTML = '';
  document.getElementById('box').innerHTML =`<div class="subtitle"><h2>Altura según Pokémon</h2></div>`
  for (let i = 0; i < finalSortHeight.length; i++) {
    document.getElementById('box').innerHTML += 
    `<div class="card">
    <h3 class="pokeNumber">${finalSortHeight[i].num}</h3>
    <img src="${finalSortHeight[i].img}" class="clickImg">
    <p><strong>${finalSortHeight[i].name}</strong></p>
    <p>${finalSortHeight[i].height} de altura</p></div>`;
    pokeModal(finalSortHeight);
  }
});

// FUNCIÓN TRADUCIR TIPOS Y DEBILIDADES
function translate(pokeData){
  let spanish= [];
  for(let i=0; i<pokeData.length;i++){
    if(pokeData[i] == ["Fire"]){
      spanish.push(["Fuego"]);
    }else if (pokeData[i] == ["Water"]){
      spanish.push(["Agua"]);
    }else if (pokeData[i] == ["Grass"]){
      spanish.push(["Planta"]);
    }else if (pokeData[i] == ["Electric"]){
      spanish.push(["Eléctrico"]);
    }else if (pokeData[i] == ["Ice"]){
      spanish.push(["Hielo"]);
    }else if (pokeData[i] == ["Fighting"]){
      spanish.push(["Lucha"]);
    }else if (pokeData[i] == ["Poison"]){
      spanish.push(["Veneno"]);
    }else if (pokeData[i] == ["Ground"]){
      spanish.push(["Tierra"]);      
    }else if (pokeData[i] == ["Flying"]){
      spanish.push(["Volador"]);
    }else if (pokeData[i] == ["Psychic"]){
      spanish.push(["Psíquico"]);     
    }else if (pokeData[i] == ["Bug"]){
      spanish.push(["Bicho"]);
    }else if (pokeData[i] == ["Rock"]){
      spanish.push(["Roca"]);
    }else if (pokeData[i] == ["Ghost"]){
      spanish.push(["Fantasma"]);
    }else if (pokeData[i] == ["Dragon"]){
      spanish.push(["Dragón"]);
    }else if (pokeData[i] == ["Normal"]){
      spanish.push(["Normal"]);
    }else if (pokeData[i] == ["Dark"]){
      spanish.push(["Siniestro"]);
      }else if (pokeData[i] == ["Steel"]){
      spanish.push(["Acero"]);   
  }else {
    spanish.push(["Sin traducción"]);
  } 
}
  return spanish;
}

// FUNCIÓN TRADUCIR HUEVOS
function translateEgg(pokeData){
if (pokeData == "2 km"){
return "2 km"
}else if (pokeData == "5 km"){
return "5 km"
}else if (pokeData == "10 km"){
return "10 km"
}else{
return "No presenta"
}
}

// FUNCIÓN BOTÓN UP
window.onscroll= function(){
  if(document.documentElement.scrollTop>100){
    document.querySelector(".imgUp").classList.add("show");
  }else{
    document.querySelector(".imgUp").classList.remove("show");
  }
  }
  document.querySelector(".imgUp").addEventListener("click",()=>{
    window.scrollTo({
      top:0,
      behavior: "smooth"
    });
  });