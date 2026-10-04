
async function DataCard(props) {
    const searchparams = await props.searchParams;
    const username = searchparams.name;
    const res = await fetch(`https://api.genderize.io/?name=${username}`);
    const data = await res.json();
    console.log(data);
    const probability = data.probability*100;
    console.log(probability)
  return (
    <div className="min-h-28 flex justify-center items-center border-2 border-white  ">
       <div className="border-2 border-blue-300 p-20 mt-20 bg-slate-700 shadow-lg shadow-white  text-green-400 mb-30 flex flex-col font-semibold text-2xl">
       <h2 >Name - {data.name}</h2>
        <p>Gender - {data.gender}</p>
        <p>Count - {data.count}</p>
        <p className="bg-pink-500 p-2">Confidence - {probability}%</p>
       </div>
    </div>
  )
}

export default DataCard;
