import { filterType, anotherExample } from '../src/data.js';
//import pokeData from './data/pokemon/pokemon.js';

describe('filterType', () => {
  
  test('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

      test('should return data´s Bulbasaur for filter "Grass"', () => {
        expect(filterType(pokeData,'Grass')).toBe('OMG');
      });
    });

    
describe('anotherExample', () => {
  test('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  test('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
