import React from 'react'
import DataCard from './serverFetch/DataCard'

function page() {
  return (
    <div className='grid grid-cols-2 items-center justify-center gap-4 ml-2 min-h-screen'>
       <div className='bg-white p-4'>
           <p className='text-black'>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ratione corporis at minima ipsam fugiat earum maiores ullam tempore iste, beatae, repellat aut! Corporis distinctio recusandae voluptate ipsa atque deserunt iste commodi, sapiente similique dolorum eius, praesentium quaerat, repellat at nam assumenda quos accusamus mollitia voluptas? Temporibus repellat quia dolore.
           </p>
       </div>
       <div>
        <DataCard username={'Ganesh'}/>
       </div>
    </div>
  )
}

export default page
