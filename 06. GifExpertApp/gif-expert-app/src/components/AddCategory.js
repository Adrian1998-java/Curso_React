import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {

    const [Value, setValue] = useState('Hola Mundo');
    const handleInputChange = ( e ) => {
        console.log();
        setValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log("Hecho");
        // console.log(categories);
        setCategories( cats => [...cats, Value]);
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input 
            type='text'
            value={ Value }
            onChange={handleInputChange}
        />
    </form>
        
    </>
  )
}
