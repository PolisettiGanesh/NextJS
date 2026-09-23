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
        <button onClick={handleClick}>Like - {like}</button>
    </>
  )
}

export default page
