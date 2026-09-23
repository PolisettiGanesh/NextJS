import React from 'react'
import { useState } from 'react'
function counter() {
    const[count,setCount] = useState
  return (
    <div className='mt-4 text-center max-w-7xl mx-auto'>
        {count}
    </div>
  )
}

export default counter
