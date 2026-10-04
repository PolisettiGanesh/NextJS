import React from 'react'

function BlogPage() {
  let res = await fetch('http://localhost:3000/api/blogs');
  return (
    <div>

    </div>
  )
}

export default BlogPage
