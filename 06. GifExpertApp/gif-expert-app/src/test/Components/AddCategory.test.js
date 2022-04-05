import { AddCategory } from "../../components/AddCategory"
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import React from "react"

describe('Pruebas con AddCategory', () => { 
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    } )

    test('Debe de mostrar correctamente', () => { 
        expect( wrapper ).toMatchSnapshot();
     })

    test('Debe de cambiar la caja de texto', () => { 
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo'

        input.simulate('change', { target: {
            value: value
                } 
        });

        expect( wrapper.find('p').text().trim() ).toBe( value );
      });

    test('NO debe de postear la informacion con Submit', () => { 
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    })

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => { 
        
        const value = 'Hola Mundo';

        //Simular el inputChange
        wrapper.find('input').simulate('change', {target: { value } });

        //Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){} });

        //setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();

        //el valor del input debe ede esta ''
        expect( wrapper.find('input').prop('value') ).toBe('');

     })
 })