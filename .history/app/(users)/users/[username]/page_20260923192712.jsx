import React from 'react'

async function singleProfile(props) {
    console.log(props);
    const params = props.params;
    const searchParams = props.searchParams;
    /*
       const params = props.params;
       const searchParams = props.searchParams;
    These two will return promise so we need to handle those by using  async & await
        1. Make a function async
        2. only server components will contain async functions
        3. use await keyword and solve those
        */
   
  return (
    <div>
            This is Dynamic Routes
    </div>
  )
}

export default singleProfile
