
async function page(props) {
    const {slug} = await props.params;
    console.log(slug);
  return (
    <div>
        <h2 className="text-center text-green-400 text-3xl">Catch All Segments From the url </h2>
        <ul className="mt-5 text-center bg-slate-700 max-w-sm mx-auto">
        {
            slug.map((element,index)=>{
                return <li className="text-yellow-300 font-semibold border" key={index}>{element}</li>
            })
        }
        </ul>
    </div>
  )
}

export default page
