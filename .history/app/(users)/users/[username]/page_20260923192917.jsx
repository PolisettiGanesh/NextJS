import React from 'react'

async function singleProfile(props) {
    console.log(props);

    /*
       const params = props.params;
       const searchParams = props.searchParams;
       console.log(params);
       console.log(searchParams)
    These two will return promise so we need to handle those by using  async & await
        1. Make a function async
        2. only server components will contain async functions
        3. use await keyword and solve those
        */
        const params = await props.params;
        const searchParams = await props.searchParams;
        console.log(params);
        console.log(searchParams)
  return (
    <div>
            This is Dynamic Routes
                <h1 className='text-center text-green-400'></h1>
    </div>
  )
}

export default singleProfile
