import React from 'react'

async function page() {
    console.log('server Page');

    const res = await fetch('https://dummyjson.com/posts');
    const data = await res.json()

  return (
    <div>
        This is server Component Page
        <div className="mt-4 max-w-7xl mx-auto gap-4 p-4  min-h-screen grid grid-cols-3">
            {
                posts.map((ele,idx,arr)=>{
                    return(
                        <div className="bg-green-400 p-2 rounded font-semibold" key={idx}>
                           <h2>{ele.title}</h2>
                           <button className="bg-blue-700 p-4 text-center rounded-2xl" onClick={handleClick}>Likes - {ele.reactions.likes}</button>
                        </div>
                    )
                })
            }
       </div>
    </div>
  )
}

export default page

