import React from 'react'
import { useState } from 'react'
function counter() {
    const[count,setCount] = useState(0);
  return (
    <div className='mt-4 text-center max-w-7xl mx-auto'>
        <button onClick={(prev)=>{

        }}></button>{count}
    </div>
  )
}

export default counter
