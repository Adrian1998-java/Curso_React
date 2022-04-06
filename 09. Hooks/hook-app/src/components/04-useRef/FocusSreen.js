import React, { useRef } from 'react'

import '../02-useEffect/effects.css'

export const FocusSreen = () => {

    const inputRef = useRef()
    // console.log(ref);

    const handleCLick = () => {
        inputRef.current.select();
    }



  return (
    <div>
        <h1>
            FocusScreen  
        </h1>
        <input
            ref={ inputRef }
            className='form-control'
            placeholder='Su nombre' 
        />
        <button 
        className='btn btn-outline-primary mt-5'
        onClick={ handleCLick }
        >
            Focus
        </button>
    </div>
  )
}
