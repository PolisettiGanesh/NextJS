
async function page(props) {
    const searchparams = await props.searchParams;
    const username = searchparams.name;
    const res = await fetch(`https://api.genderize.io/?name=${username}`);
    const data = await res.json();
    console.log(data);
  return (
    <div className="min-h-20 flex justify-center items-center border-2 border-white  flex-col ">
       <div className="border-2 border-yellow-300 p-40 mt-20 bg-white shadow-lg shadow-amber-300 text-black">
       <h2>{data.name}</h2>
        <p>{data.gender}</p>
        <p>{data.count}</p>
       </div>
    </div>
  )
}

export default page
