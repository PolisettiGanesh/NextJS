
async function PostId({params}) {
    // const params = await props.params;
    // console.log(params);
    const {postId} = await params;
    console.log(postId);
    return (
    <div>
        This is Post Id Page
        {/* <h1 className='text-center text-green-400 text-4xl'>Post ID - {params.postId}</h1> */}
        <h1 className='text-center text-green-400 text-4xl'>Post ID - {postId}</h1>
        <h1 className='text-center text-green-400 text-4xl'>Post ID - {postId}</h1>

    </div>
  )
}

export default PostId
