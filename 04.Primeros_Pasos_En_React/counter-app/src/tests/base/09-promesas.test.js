import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";



describe('Prueba con 09', () => { 
    
    test('getHeroeByAsync debe de retornar un Heroe async', ( done ) => { 
        
        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toBe( heroes[1] );
                done();
            })
     });

     test('debe de obtener un error si el heroe por id no existe', ( done ) => { 
         
        const id = 10;
        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe('No se pudo encontrar el héroe');
                done();
            })
      });
 })