import { getSaludo } from "../../base/02-template-string";


describe('Pruebas en 02template-string', () => { 
    
    test('getSaludo debe retorar hola Fernando', () => { 

        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        expect ( saludo ).toBe("Hola "+nombre);
     })

     //GetSaludo debe de retorna Hola Carlos! si no hay argumentos nombre

     test('GetSaludo debe de retorna Hola Carlos! si no hay argumentos nombre', () => { 
         
        const saludo = getSaludo();
        expect ( saludo ).toBe("Hola Carlos!");
        
      })

 })


