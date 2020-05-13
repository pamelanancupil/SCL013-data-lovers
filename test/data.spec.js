import { 
filterType,
filterEgg, 
filterCandy,
searchPoke,
sortHeight
} from '../src/data.js';

const dataType = [{
  "name": "Charmander",
  "type": [
    "Fire"
  ]
}]

const dataEgg = [{
  "name": "Bulbasaur",
  "egg": "2 km"
}]

const dataCandy = [{
  "name": "Ivysaur",
  "candy_count": 100
}]

const data = [{
  "name": "Bulbasaur",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.71 m",
  "candy_count": 25,
    "egg": "2 km",

}, {
  "name": "Ivysaur",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.99 m",
  "candy_count": 100,
  "egg": "Not in Eggs",
},{
  "name": "Venusaur",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "2.01 m",
  "egg": "Not in Eggs",
}]

//FUNCIÓN FILTRAR POR TIPO DE POKÉMON

describe('filterType', () => {

test('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

      test('should return "Fire" for filter "type"', () => {
        expect(filterType(dataType,"Fire")).toEqual([{
          "name": "Charmander",
          "type": [
            "Fire"
          ]
        }]);
      });
    })

//FUNCIÓN FILTRAR POR HUEVOS

describe('filterEgg', () => {
  
  test('is a function', () => {
    expect(typeof filterEgg).toBe('function');
   });
     
   test('should return "2 km" for filter "egg"', () => {
     expect(filterEgg(dataEgg,"2 km")).toEqual([{
      "name": "Bulbasaur",
      "egg": "2 km"
    }]);
      });
      });

//FUNCIÓN FILTRAR POR CARAMELOS

describe('filterCandy', () => {
  
 test('is a function', () => {
   expect(typeof filterCandy).toBe('function');
  });
    
  test('should return "100" for filter "candy"', () => {
    expect(filterCandy(dataCandy,"100")).toEqual([{
      "name": "Ivysaur",
      "candy_count": 100
    }]);
     });
     });

//FUNCIÓN BUSQUEDA 

describe('searchPoke', () => {
  
  test('is a function', () => {
    expect(typeof searchPoke).toBe('function');
   });
     
   test('should return "Bulbasaur" for shearch "Bulbasaur"', () => {
     expect(searchPoke(data,"Bulbasaur")).toEqual([{"candy_count": 25, "egg": "2 km", "height": "0.71 m", "name": "Bulbasaur", "type": ["Grass", "Poison"]}])
      });
      });

//FUNCIÓN ORDENAR POR ALTURA 

describe('sortHeight', () => {
  
  test('is a function', () => {
    expect(typeof sortHeight).toBe('function');
   });
     
   test('should return "lowHight" for order "height"', () => {
     expect(sortHeight(data,"height","lowHigh")).toEqual([{
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"
      ],
      "height": "0.71 m",
      "candy_count": 25,
        "egg": "2 km",
    
    }, {
      "name": "Ivysaur",
      "type": [
        "Grass",
        "Poison"
      ],
      "height": "0.99 m",
      "candy_count": 100,
      "egg": "Not in Eggs",
    },{
      "name": "Venusaur",
      "type": [
        "Grass",
        "Poison"
      ],
      "height": "2.01 m",
      "egg": "Not in Eggs",
    }]);
      });
      });

describe('sortHeight', () => {
           
         test('should return "highLow" for order "height"', () => {
           expect(sortHeight(data,"height","highLow")).toEqual([{
            "name": "Bulbasaur",
            "type": [
              "Grass",
              "Poison"
            ],
            "height": "0.71 m",
            "candy_count": 25,
              "egg": "2 km",
          
          }, {
            "name": "Ivysaur",
            "type": [
              "Grass",
              "Poison"
            ],
            "height": "0.99 m",
            "candy_count": 100,
            "egg": "Not in Eggs",
          },{
            "name": "Venusaur",
            "type": [
              "Grass",
              "Poison"
            ],
            "height": "2.01 m",
            "egg": "Not in Eggs",
          }].reverse());
            });
            });