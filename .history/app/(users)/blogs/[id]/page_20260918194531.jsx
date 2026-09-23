async function SingleBlogPage({params}) {
  console.log(params);
  let data = await params;
  console.log(data);
  let {id} = data;
return (
  <div>
      single blog page{id}
  </div>
)
}
export default SingleBlogPage;
// async function SingleBlogPage(data) {
//     console.log(data);
//     let params = await data.params;
//     console.log(params);
//   return (
//     <div>
//         single blog page {params.id}
//     </div>
//   )
// }

// export default SingleBlogPage
