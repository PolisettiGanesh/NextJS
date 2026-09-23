import React from 'react'

function DashboardLayout({children}) {
  return (
    <div>
        <aside className=''>

        </aside>
        <main>
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout
