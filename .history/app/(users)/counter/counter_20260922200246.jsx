import React from 'react'
import { useState } from 'react'
function counter() {
    const[count,setCount] = useState(0);
  return (
    <div className='mt-4 text-center max-w-7xl mx-auto'>
        <button className='bg-green-500 rounded ' onClick={(prev)=>{
            setCount(prev+1);
        }}>count - {count}</button>
    </div>
  )
}

export default counter
