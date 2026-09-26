
async function page(props) {
    const searchparams = await props.searchParams;
    const username = searchparams.name;
    const res = await fetch(`https://api.genderize.io/?name=${username}`);
    const data = await res.json();
    console.log(data);
  return (
    <div className="min-h-28 flex justify-center items-center border-2 border-white  ">
       <div className="border-2 border-blue-300 p-20 mt-20 bg-slate-700 shadow-lg shadow-white text-black mb-30 flex flex-col font-semibold text-2xl">
       <h2>Name - {data.name}</h2>
        <p>Gender - {data.gender}</p>
        <p>Count - {data.count}</p>
       </div>
    </div>
  )
}

export default page
