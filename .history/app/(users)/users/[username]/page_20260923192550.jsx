import React from 'react'

function singleProfile(props) {
    console.log(props);
    const params = props.params;
    const searchParams = props.searchParams;
    /*
    These two will return promise so we need to handle those by using  async & await
        1. Make a fucntion async
        */
    console.log(params);
    console.log(searchParams)
  return (
    <div>
            This is Dynamic Routes
    </div>
  )
}

export default singleProfile
