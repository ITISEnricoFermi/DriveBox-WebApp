import React from 'react'

const Button = ({children}) => {
  return (
    <button className="px-3 bg-red-500 rounded-md w-full max-w-[260px] h-12 font-bold shadow-md hover:shadow-none">{children}</button>
  )
}

export default Button