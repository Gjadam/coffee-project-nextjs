import React from 'react'

export default function UserPanelLink({ text, children }) {
  return (
    <div className="  w-full text-center p-3 rounded-3xl  hover:last:bg-red-600 hover:bg-primary text-secondary hover:text-white transition-colors">
      <span className=' flex items-center gap-3'>{children} {text}</span>
    </div>
  )
}
