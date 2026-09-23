'use client'
import { useState } from "react";
function page() {
    console.log('client component page');
    const [like,setLike] = useState(0);
    const handleClick = ()=>{
        setLike(like+1);
    }
  return (
    <div>
      This is client Component Page
        
    </div>
  )
}

export default page
