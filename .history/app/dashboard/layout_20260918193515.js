import React from 'react'

function DashboardLayout({children}) {
  return (
    <div>
        <aside className='w-1/4 border-2 border-orange-500 h-screen'>
                <h1>Web Blogs</h1>
        </aside>
        <main className='w-3/4 p-4 text-white'>
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout
