import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('Pruebas sobre el hook UseFetchGifs', () => { 
    
    test('Debe retornar le estado inicial', async() => { 
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const { data, loading } = result.current;
        
        await waitForNextUpdate();

        // const {data, loading} = useFetchGifs( 'One Punch' );

        // console.log( data, loading );

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);  
     })

     test('Debe retornar un array de imagenes y el loading en false', async() => { 
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toEqual( 10 );
        expect( loading ).toBe( false );  
      })
 })