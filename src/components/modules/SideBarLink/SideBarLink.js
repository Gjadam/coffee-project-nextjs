import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SideBarLink({ route, text, children, onclick }) {
  const pathName = usePathname()
  const isActive = pathName === route

  return (
    <div className={`w-full text-center p-3 rounded-3xl  hover:last:bg-red-600 ${isActive ? 'bg-primary text-white' : null} hover:bg-primary text-secondary hover:text-white transition-colors`} onClick={onclick}>
      {
        route ? (
          <Link href={route}>
            <div className="flex items-center gap-3 ">
              {children}
              <span>{text}</span>
            </div>
          </Link>
        ) : (
          <div className="flex items-center gap-3 ">
            {children}
            <span>{text}</span>
          </div>
        )
      }
    </div>
  )
}
