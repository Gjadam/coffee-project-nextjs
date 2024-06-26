import React from 'react'

export default function CategoryHeader({ title }) {
  return (
    <div className="flex justify-center items-center text-white h-96 lg:h-[28rem] bg-[url('/images/jpg/category-bg.jpg')] bg-fixed bg-no-repeat">
        <h1 className=' text-6xl  lg:text-6xl'>{title}</h1>
    </div>
  )
}
