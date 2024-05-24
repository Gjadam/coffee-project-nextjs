import React from 'react'

export default function Button({ type, text }) {
  return (
    type === 'simple' ? (
      <div className=' group text-sm hover:text-primary relative before:absolute before:w-3 before:h-[1px] before:top-1/2 before:bg-current before:transition-all before:duration-300 hover:before:w-4 cursor-pointer   '>
        <span className=' mr-4 group-hover:mr-5 transition-all duration-300'>{text}</span>
      </div>
    ) : type === 'outline' ? (
      <div className=" w-40 p-4 text-sm  rounded-xl  border-1 border-primary hover:border-secondary hover:bg-secondary text-primary hover:text-white transition-colors duration-200 cursor-pointer">
        {text}
      </div>
    ) : (
      <div className=" w-40 p-4 text-sm  rounded-xl bg-primary hover:bg-secondary text-white transition-colors  cursor-pointer">
        {text}
      </div>
    )


  )
}
