import React from 'react'

function DashboardLayout({children}) {
  return (
    <div>
        <aside>

        </aside>
        <main>
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout
