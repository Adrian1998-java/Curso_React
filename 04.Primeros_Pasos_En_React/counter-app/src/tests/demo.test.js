

describe('Pruebas en el archivo demo.test.js ', () => { 
    //Prueba 1
    test('Deben ser iguales los string', () => { 
    
        //1. Inicializacion
        const mensaje1 = "Hola Mundo";

        //2. Estimulo
        const mensaje2 = "Hola Mundo";
    
        // 3. Observar el comportamiento
        expect( mensaje1).toBe(mensaje2);
    })
});








