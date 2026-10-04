import React from 'react'

async function BlogPage() {
  let res = await fetch('http://localhost:3000/api/blogs');
  let data = await res.json();
  console.log(data);
  return (
    <div className=''>
        {data.map((blog,idx)=>{
          return(
            <div>{blog.title}</div>
          )
        })}
    </div>
  )
}

export default BlogPage
