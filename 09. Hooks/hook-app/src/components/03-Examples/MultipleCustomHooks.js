import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFecth } from '../../hooks/useFecth'

import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {
  
    const { counter, increment } =  useCounter(1);

    const { loading, data } = useFecth( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
   
    const { author, quote } = !!data && data[0]; 
    // console.log( state );
    // console.log( loading );
    // console.log( data );
    console.log( author, quote );
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                loading
                ?
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
                :
                (
                    <blockquote className='blockquote text-right'>
                        <p className='mb-0'> { quote } </p>
                        <br/>
                        <footer className='blockquote-footer'> { author } </footer>
                    </blockquote>
                )
            }

            <button 
            className='btn btn-primary'
            onClick={ increment }
            >
                Siguiente frase
            </button>

        </div>
    )
}
