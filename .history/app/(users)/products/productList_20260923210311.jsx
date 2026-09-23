'use client'
import { useSearchParams } from "next/navigation"
function ProductList() {
    const searchParams = useSearchParams();
    console.log("Inside : ",searchParams);
    const category = searchParams.get('category');
    console.log(category);
    const pages = searchParams.getAll('page');
    const p1 = pages[0];
    const p2 = pages[1];
    console.log(p1);
    console.log(p2);
    const page = searchParams.get('page');
    console.log(page);

    const entries = Object.fromEntries(searchParams.entries();
    console.log(entries);
  return (
    <div>

    </div>
  )
}

export default ProductList
