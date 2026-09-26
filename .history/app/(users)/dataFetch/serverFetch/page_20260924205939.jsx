
async function page(props) {
    const searchparams = await props.searchParams;
    const username = searchparams.name;
    const res = await fetch(`https://api.genderize.io/?name=${username}`);
    const data = await res.json();
    console.log(data);
  return (
    <div className="min-h-screen flex justify-center items-center border-2 border-white p-4 flex-col ">
       <div className="border-2 border-yellow-300 max-w-xl">
       <h2>{data.name}</h2>
        <p>{data.gender}</p>
        <p>{data.count}</p>
       </div>
    </div>
  )
}

export default page
