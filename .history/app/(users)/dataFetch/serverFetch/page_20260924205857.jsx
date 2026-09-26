
async function page(props) {
    const searchparams = await props.searchParams;
    const username = searchparams.name;
    const res = await fetch(`https://api.genderize.io/?name=${username}`);
    const data = await res.json();
    console.log(data);
  return (
    <div className="min-h-screen flex justify-center items-center border-2 border-white p-4 flex-col ">
       <div></div>
    </div>
  )
}

export default page
