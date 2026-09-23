import React from 'react'

async function Products(props) {
        const searchParams = await props.searchParams;
        console.log(searchParams);
        const useCallback(
          () => {
            first
          },
          [second],
        )
        
        const {category,sort,page} = searchParams;
  return (
    <div>
        This is Search params in Server components
        <h1 className='text-center text-green-400 text-4xl'>Category - {category}</h1>
        <h1 className='text-center text-green-400 text-4xl'>sort - {sort}</h1>
        <h1 className='text-center text-green-400 text-4xl'>page - {page}</h1>
        <h2 className='text-center text-red-600 text-4xl'>Showing {category} products , sorted by {sort} , page {page}</h2>
    </div>
  )
}

export default Products
