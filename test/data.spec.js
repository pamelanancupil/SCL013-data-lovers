import { 
filterType,
filterEgg, 
filterCandy,
searchPoke,
sortHeight
} from '../src/data.js';

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

      test('should return [["Grass","Poison"],["Grass","Poison"],["Grass","Poison"]] for filter "type"', () => {
        expect(filterType(data,"type")).toEqual([["Grass","Poison"],["Grass","Poison"],["Grass","Poison"]]);
      });
    })

//FUNCIÓN FILTRAR POR HUEVOS

describe('filterEgg', () => {
  
  test('is a function', () => {
    expect(typeof filterEgg).toBe('function');
   });
     
   test('should return ["2 km"] for filter "egg"', () => {
     expect(filterEgg(data,"egg")).toEqual(["2 km"]);
      });
      });

//FUNCIÓN FILTRAR POR CARAMELOS

describe('filterCandy', () => {
  
 test('is a function', () => {
   expect(typeof filterCandy).toBe('function');
  });
    
  test('should return ["25"] for filter "candy"', () => {
    expect(filterCandy(data,"candy")).toEqual(["25"]);
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
     
   test('should return [["2.01 m"],["0.99 m"],["0.71 m"]] for order "height"', () => {
     expect(sortHeight(data,"height")).toEqual([["2.01 m"],["0.99 m"],["0.71 m"]] );
      });
      });

        
        
   /* , anotherExample 
describe('anotherExample', () => {
  test('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  test('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
