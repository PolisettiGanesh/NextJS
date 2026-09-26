
async function page(props) {
    const {slug} = await props.params;
    
  return (
    <div>
        <h2 className="text-center">Catch All Segments from the url</h2>
    </div>
  )
}

export default page
