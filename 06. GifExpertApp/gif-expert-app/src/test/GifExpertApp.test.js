import { shallow } from "enzyme"
import React from "react"
import { GifExpertApp } from "../GifExpertApp"

describe('Pruebas sobre GifExpertApp', () => { 
    
    const wrapper = shallow( <GifExpertApp /> );

    test('Debe de funcionar correctamente', () => { 

        expect( wrapper ).toMatchSnapshot();
     });

     test('Debe demostrar una lista de categorias', () => { 
         
        const categorias = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categorias}/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categorias.length );


      })
 })