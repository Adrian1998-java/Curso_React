import React from 'react'

export const GifGridItem = ( {title, url} ) => {
  
    // console.log( img );

   return (
    <div className='card animate__animated animate__zoomIn'>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}

export default GifGridItem;


/**
 * 1. Enzyme
 * 2. Enzyme to Json
 * 3. Debe de mostrar el componente correctamente
 *    *shallow
 *     *wrapper 
 *    *wrapper.toMatchSnapshot
 * 
 * 
 */