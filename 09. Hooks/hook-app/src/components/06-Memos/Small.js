import React from 'react'

export const Small = React.memo(({value}) => {
  
    console.log('Me estoy llamando')
    return (
    <small>
        {value}
    </small>
  )
})
