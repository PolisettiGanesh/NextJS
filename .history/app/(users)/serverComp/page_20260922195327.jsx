import React from 'react'

async function page() {
    console.log('server Page');

    const res = fetch('ele.reactions.likes')

  return (
    <div>
        This is server Component Page
    </div>
  )
}

export default page

