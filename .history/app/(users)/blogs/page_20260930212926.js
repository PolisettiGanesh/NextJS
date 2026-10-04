import React from 'react'

async function BlogPage() {
  let res = await fetch('http://localhost:3000/api/blogs');
  let data = await res.json();
  let {blogs} = data;
  console.log(blogs);
  return (
    <div className='grid grid-col-4  gap-3 min-h-screen w-full'>
        {blogs.map((blog,idx)=>{
          return(
            <div key={idx}>
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
              <img src={blog.thumbnail} width={'100px'}/>
              </div>
          )
        })}
    </div>
  )
}

export default BlogPage
