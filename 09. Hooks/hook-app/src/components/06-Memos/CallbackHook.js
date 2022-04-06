import React, { useState } from 'react'

import '../05-useLayoutEffect/layout.css'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = () => {
        setCounter(counter + 1)
    }

  return (
    <div>
        <h1>UseCallBack Hook</h1>
        <hr/>
    </div>
  )
}
