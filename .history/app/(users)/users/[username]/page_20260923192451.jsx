import React from 'react'

function singleProfile(props) {
    console.log(props);
    const params = props.params;
    const searchParams = props.searchParams;
    
    console.log(params);
    console.log(searchParams)
  return (
    <div>
            This is Dynamic Routes
    </div>
  )
}

export default singleProfile
