import { useEffect, useRef, useState } from "react"


export const useFecth = (url) => {
  
    const isMountet = useRef(true);
    const [state, setState] = useState( {data: null, loading: true, error: null} )

    useEffect(() => {
        
        return () => {
            isMountet.current = false;
        }

    }, [])
    

    useEffect(() => {

        setState({data: null, loading: true, error: null});

      fetch( url )
        .then( resp => resp.json() )
        .then( data => {

                if( isMountet.current ){
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }
        } )
    }, [url])
    


    return state;
}
