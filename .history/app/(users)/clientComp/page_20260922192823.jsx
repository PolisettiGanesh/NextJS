'use client'
import { useEffect, useState } from "react";
function page() {
    console.log('client component page');

    const [like,setLike] = useState(0);
    const handleClick = ()=>{
        setLike(like+1);
    }
    async function fetchData(){
        const res = fetch('https://dummyjson.com/posts');
        console.log(res);
    }
    useEffect(()=>{
        fetchData();
    })
  return (
    <>
        <h2>This is client Component Page</h2>
       <div className="mx-auto max-w-xl ">
       <button className="bg-slate-800 px-2 py-2 mt-4 text-center" onClick={handleClick}>Like - <span className="bg-green-500 px-2 py-1">{like}</span></button>
       </div>
    </>
  )
}

export default page
