
async function DataCard(props) {
    const searchparams = await props.searchParams;
    const username = searchparams.name;
    const res = await fetch(`https://api.genderize.io/?name=${username}`);
    const data = await res.json();
    console.log(data);
    const probability = data.probability*100;
    console.log(probability)

    if (!userName) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                No Name Provided
              </h1>
              <p className="text-gray-600">
                Please add ?name=yourname to the URL
              </p>
            </div>
          </div>
        </div>
      );
    }
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
