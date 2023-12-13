import React from 'react'

function Button({btnText}) {
  return (
    <a href="#" className="px-6 py-3 rounded-sm w-fit lg:w-1/3 text-center text-white font-semibold uppercase bg-red-600">{btnText}</a>
  )
}

export default Button