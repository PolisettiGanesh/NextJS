
async function page(props) {
    const searchparams = await props.searchParams;
    const username = searchparams.name;
    const res = await fetch(`https://api.genderize.io/?name=${username}`);
    const data = await res.json;

  return (
    <div>

    </div>
  )
}

export default page
