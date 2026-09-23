'use client'
import { useState } from "react";
function page() {
    console.log('client component page');
    const [like,setLike] = useState(0);
    const handleClick = ()=>{
        setLike(like+1);
    }
  return (
    <>
        <h2>This is client Component Page</h2>
        <button className="bg-slate-800 px-2 py-2 mt-4 mx-auto max-w-6xl" onClick={handleClick}>Like - <span className="bg-green-500 px-2 py-1">{like}</span></button>
    </>
  )
}

export default page
