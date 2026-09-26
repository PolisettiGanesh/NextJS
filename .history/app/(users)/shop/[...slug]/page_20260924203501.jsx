
async function page(props) {
    const {slug} = await props.params;
    console.log(slug);
  return (
    <div>
        <h2 className="text-center text-green-400 text-3xl">Catch All Segments From the url </h2>
    </div>
  )
}

export default page
