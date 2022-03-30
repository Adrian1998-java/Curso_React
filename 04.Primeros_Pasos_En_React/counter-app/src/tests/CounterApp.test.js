import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import CounterAPP from '../CounterApp';

/**
 * 1. Crear las siguientes pruebas para el CounterApp
 *  *Debe de mostrar COunterAPP correctamente (hacer match con un snapshot)
 *  Y sus valores por defecto
 * 
 *  *Debe de mostrar el valor por defecto de 100
 *  *Usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador
 */

describe('Pruebas sobre CounterApp', () => { 
    
    let wrapper = shallow( <CounterAPP /> );

    beforeEach( () => {
        wrapper = shallow( <CounterAPP /> );
    } )

    test('Debe de mostrar CounterAPP correctamente y sus valores por defecto', () => { 
        
        // const num = 100

        expect( wrapper ).toMatchSnapshot();

     });
     
     test('Debe de mostrar el valor por defecto de 100 correctamente', () => { 
        
        const num = '0';
        const wrapper = shallow( <CounterAPP value={num} /> );

        const contador = wrapper.find('h2').text();

        expect( num ).toBe( contador );
    });

    test('Debe de incrementar con el Botón +1', () => {        
        
        wrapper.find('button').at(0).simulate('click');
        const PlusText = wrapper.find('h2').text();
        expect( PlusText ).toBe('1'); 
    });

    test('Debe de decrementar con el Botón -1', () => {        
        
        wrapper.find('button').at(2).simulate('click');
        const MinusText = wrapper.find('h2').text();
        expect( MinusText ).toBe('-1'); 
    });

    
    test('Debe de resetear con el Botón Reset', () => {        
        
        const wrapper = shallow( <CounterAPP value={105} /> );

        wrapper.find('button').at(1).simulate('click');

        const ResetText = wrapper.find('h2').text();

        expect( ResetText ).toBe('105');

    });

});






