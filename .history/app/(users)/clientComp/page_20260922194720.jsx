'use client'
import { useEffect, useState } from "react";
function page() {
    console.log('client component page');

    const [like,setLike] = useState(0);
    const[posts,setPosts] = useState([]);
    const handleClick = ()=>{
        setLike(like+1);
    }
    async function fetchData(){
        const res = await fetch('https://dummyjson.com/posts');
        console.log(res);
        const data = await res.json();
        console.log(data);
        //console.log(posts);
        setPosts(data.posts);
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <>
        <h2>This is client Component Page</h2>
       <div className="mx-auto max-w-xl ">
       <button className="bg-slate-800 px-2 py-2 mt-4 text-center" onClick={handleClick}>Like - <span className="bg-green-500 px-2 py-1">{like}</span></button>
       </div>
       <div className="mt-4 max-w-7xl mx-auto gap-4 p-4  min-h-screen grid grid-cols-3">
            {
                posts.map((ele,idx,arr)=>{
                    return(
                        <div className="bg-green-400 p-2 rounded font-semibold" key={idx}>
                           <h2>{ele.title}</h2>
                           <p className="bg-red-300">Likes - {ele.reactions.likes}</p>
                        </div>
                    )
                })
            }
       </div>
    </>
  )
}

export default page
