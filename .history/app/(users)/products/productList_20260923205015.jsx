'use client'
import { useSearchParams } from "next/navigation"
function ProductList() {
    const searchParams = useSearchParams();
    console.log("Inside : ",searchParams);
    const category = searchParams.get('category');
    console.log(category);
    const pages = searchParams.getA('page');

  return (
    <div>

    </div>
  )
}

export default ProductList
