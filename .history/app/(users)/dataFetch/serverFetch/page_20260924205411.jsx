
async function page(props) {
    const searchparams = await props.searchParams;
    const username = searchparams.name;
    const res = await fetch('')
  return (
    <div>

    </div>
  )
}

export default page
