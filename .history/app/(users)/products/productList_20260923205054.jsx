'use client'
import { useSearchParams } from "next/navigation"
function ProductList() {
    const searchParams = useSearchParams();
    console.log("Inside : ",searchParams);
    const category = searchParams.get('category');
    console.log(category);
    const pages = searchParams.getAll('page');
    const p1 = pages[0];
    const p2 = pages[0];
    console.log(p1);
    console.log(p1);

  return (
    <div>

    </div>
  )
}

export default ProductList
