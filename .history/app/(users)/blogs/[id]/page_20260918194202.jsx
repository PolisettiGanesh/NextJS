
async function SingleBlogPage(data) {
    console.log(data);
    let params = await data.params;
    console.log(params);
  return (
    <div>
        single blog page {params}
    </div>
  )
}

export default SingleBlogPage
