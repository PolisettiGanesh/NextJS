import React from 'react'

async function page() {
    console.log('server Page');

    const res = await fetch('https://dummyjson.com/posts');


  return (
    <div>
        This is server Component Page
    </div>
  )
}

export default page

