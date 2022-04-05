import React, { useEffect } from 'react'

export const Message = () => {
  
    useEffect(() => {
      
                
        const mouseMove = (e) =>{
            console.log(e);
           const cords = { x: e.x, y: e.y };
           console.log(cords);
       }

        window.addEventListener('mousemove', mouseMove);
    
        return () => {
            console.log('comopnente desmontado');
            window.removeEventListener('mousemove', mouseMove)
        }

    }, [])
    

    return (
    <div>Eres genial</div>
  )
}
