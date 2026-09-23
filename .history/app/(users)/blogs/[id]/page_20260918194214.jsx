
async function SingleBlogPage(data) {
    console.log(data);
    let params = await data.params;
    console.log(params);
  return (
    <div>
        single blog page {params.id}
    </div>
  )
}

export default SingleBlogPage
