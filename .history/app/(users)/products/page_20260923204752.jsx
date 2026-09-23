import React from 'react'
import ProductList from './productList';

async function Products(props) {
        const searchParams = await props.searchParams;
        console.log("",searchParams);
        const category = searchParams?.category || 'all';
        const sort = searchParams?.sort || 'default';
        const page = searchParams?.page || 1;

        //const {category,sort,page} = searchParams;
  return (
    <div>
        <ProductList />
        This is Search params in Server components
        <h1 className='text-center text-green-400 text-4xl'>Category - {category}</h1>
        <h1 className='text-center text-green-400 text-4xl'>sort - {sort}</h1>
        <h1 className='text-center text-green-400 text-4xl'>page - {page}</h1>
        <h2 className='text-center text-red-600 text-4xl'>Showing {category} products , sorted by {sort} , page {page}</h2>
    </div>
  )
}

export default Products
