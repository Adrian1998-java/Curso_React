import { shallow } from "enzyme"
import React from "react"
import GifGridItem from "../../components/GifGridItem"


describe('Pruebas en <GifGridItem />', () => { 

    const title = "Un título";
    const url = "https://localhost/algo.jpg";
    const wrapper = shallow( <GifGridItem title={title} url={url}/> );

    test('Debe de mostrar el componente correctamente', () => { 
        
        expect( wrapper ).toMatchSnapshot();
     });


     test('Debe de tener un párrafo con el title', () => { 

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

      });

      test('Debe de obtener la imagen igual al url y alt de los props', () => { 
          
        const img = wrapper.find('img');
        // console.log( img.props().src )

        expect( img.props().src ).toBe( url );
        expect( img.props().alt ).toBe( title );

       });

       test('Debe de tener "animate_FadeIn"', () => { 
           
            const div = wrapper.find('div');
            // console.log( div.props().className );
            const className = div.props().className;


            expect( className.includes('animate__zoomIn') ).toBe( true );
        })
 })
