
import { useState } from 'react'
function counter() {
    const[count,setCount] = useState(0);
  return (
    <div className='mt-4 text-center max-w-7xl mx-auto'>
        <button className='bg-green-500 rounded px-2 py-1' onClick={(prev)=>{
            setCount(prev+1);
        }}>count - {count}</button>
    </div>
  )
}

export default ounter
