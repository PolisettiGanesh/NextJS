import React from 'react'

async function BlogPage() {
  let res = await fetch('http://localhost:3000/api/blogs');
  let data = await res.json();
  return (
    <div className=''>
        
    </div>
  )
}

export default BlogPage
