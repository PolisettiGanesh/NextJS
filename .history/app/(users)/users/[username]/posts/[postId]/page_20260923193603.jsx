
async function PostId(props) {
    const params = await props.params;
    console.log(params);
    return (
    <div>
        This is Post Id Page
        <h1 className='text-center text-green-400 text-4xl'>{params.PostId}</h1>
    </div>
  )
}

export default PostId
