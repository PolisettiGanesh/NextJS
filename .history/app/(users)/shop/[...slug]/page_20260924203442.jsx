
async function page(props) {
    const {slug} = await props.params;
    console.log(slug);
  return (
    <div>
        <h2 className="text-center">Catch All Segments From the url </h2>
    </div>
  )
}

export default page
