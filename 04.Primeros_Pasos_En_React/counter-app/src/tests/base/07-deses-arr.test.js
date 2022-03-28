import { retornaArreglo } from "../../base/07-deses-arr"


describe('Pruebas en 07', () => { 
    
    test('Retorna el arreglo/Array', () => { 
        
        // export const retornaArreglo = () =>{
        //     return ['ABC', 123];

        const letras = 'ABC';
        const numeros = 123;

        expect(retornaArreglo()).toEqual(['ABC', 123]);

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
     })
 })