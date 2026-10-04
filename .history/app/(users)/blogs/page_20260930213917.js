import React from 'react'

async function BlogPage() {
  let res = await fetch('http://localhost:3000/api/blogs');
  let data = await res.json();
  let {blogs} = data;
  console.log(blogs);
  return (
    <div className='flex  gap-3 min-h-screen'>
        {blogs.map((blog,idx)=>{
          return(
            <div key={idx} className='flex flex-col justify-center items-center border-2'>
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
              <img src={blog.thumbnail} width={'00px'}/>
              </div>
          )
        })}
    </div>
  )
}

export default BlogPage
