import React from 'react'

function Button({text}) {
  return (
    <div>
        <button className="p-2 bg-orange-400 rounded-xl text-black letter-spa font-semibold ">{text}</button>
    </div>
  )
}

export default Button
