import React from 'react'

async function Products(props) {
        const searchParams = await props.searchParams;
        console.log(searchParams);
        const {category,sort,page} = searchParams;
  return (
    <div>
        This is Search params in Server components
        <h1 className='text-center text-green-400 text-4xl'>Category - {category}</h1>
        <h1 className='text-center text-green-400 text-4xl'>tv - {tv}</h1>
    </div>
  )
}

export default Products
