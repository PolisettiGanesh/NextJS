import React from 'react'

function DashboardLayout({children}) {
  return (
    <div>
        <aside className='w-1/4 border'>

        </aside>
        <main>
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout
