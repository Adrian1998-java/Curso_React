import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [Value, setValue] = useState('');

    const handleInputChange = ( e ) => {
        setValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( Value.trim().length > 2 ){
            setCategories( cats => [Value, ...cats]);
            setValue('');
        }
       
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <p>{ Value }</p>
        <input 
            type='text'
            value={ Value }
            onChange={handleInputChange}
        />
    </form>
    </>
  )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
