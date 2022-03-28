import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05funciones', () => { 
    
    test('getUser Debe retornar un objeto', () => { 

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual(userTest);
    })

    test('getUsuarioActivo Debe retornar un objeto', () => { 

        const userTest = {
            uid: 'ABC567',
            username: 'Adrian'
        }

        const nombre = 'Adrian';
        const user = getUsuarioActivo(nombre);

        expect( user ).toEqual(userTest);

    })
})



