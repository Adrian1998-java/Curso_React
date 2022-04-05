import { shallow } from "enzyme"
import React from "react"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Pruebas en GifGrid', () => { 
    
    const category = 'One punch';
    const wrapper = shallow( <GifGrid category={category}/> );

    test('Debe de mostrar el componente correctamente', () => { 
        
        useFetchGifs.mockReturn({
            data: [],
            loading: true
        });
        
        expect( wrapper ).toMatchSnapshot();
     });

     test('Debe de mostrar items cuando se cargan imagenes useFecth', () => { 
        const gifs = [{
            id:'ABS',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'CUalqwuier cosa',
        },
        {
            id:'ABFG',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier otra cosa',
        }]

        useFetchGifs.mockReturn({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={category}/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false )
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
      })
 })