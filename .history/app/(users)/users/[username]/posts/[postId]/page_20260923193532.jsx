
async function PostId(props) {
    const params = props.params;
    return (
    <div>
        This is Post Id Page
        <h1 className='text-center text-green-400 text-4xl'>{params.username}</h1>
    </div>
  )
}

export default PostId
