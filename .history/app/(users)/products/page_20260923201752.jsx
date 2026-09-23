import React from 'react'

async function Products(props) {
        const searchParams = await props.searchParams;
        console.log(searchParams);
  return (
    <div>
        This is Search params in Server components
        
    </div>
  )
}

export default Products
