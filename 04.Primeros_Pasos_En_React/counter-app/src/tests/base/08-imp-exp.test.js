import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Prubeas en 08', () => { 
    
    test('Debe de retornar un heroe por id', () => { 

        // export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect ( heroe ).toEqual( heroeData ); 

        console.log(heroe);
     })


         
    test('Debe de retornar undefined si el heroe no existe', () => { 

        // export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

        const id = 10;
        const heroe = getHeroeById( id );

        expect ( heroe ).toBe( undefined ); 

        console.log(heroe);
     })

     //Debe de retornar un arreglo/array con los heroes de DC owner toEqual al arreglo filtrado

     test('Debe de retornar un arreglo/array con los heroes de DC', () => { 

        const owner = 'DC'

        const heroesFilter = getHeroesByOwner(owner);
        const totalHeroes = heroes.filter( h => h.owner === owner );

        expect ( heroesFilter ).toEqual( totalHeroes ); 
        
     })

     //Debe de retornar un arreglo con los heroes de marvel length =2

     test('Debe de retornar un arreglo con los heroes de marvel', () => { 

        const owner = 'Marvel'

        const heroesFilter = getHeroesByOwner(owner);

        expect ( heroesFilter.length ).toBe( 2 ); 
        
     })
 });
