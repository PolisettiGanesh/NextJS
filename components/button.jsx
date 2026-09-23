import React from 'react'

function Button({text}) {
  return (
    <div>
        <button className="p-3 bg-orange-400 rounded-xl text-black  font-semibold ">{text}</button>
    </div>
  )
}

export default Button
