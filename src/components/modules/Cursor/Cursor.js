'use client'
import { useEffect } from 'react'

export default function Cursor() {

    useEffect(() => {
        const cursorDot = document.querySelector('.cursorDot')
        const cursorOutLine = document.querySelector('.cursorOutLine')

        window.addEventListener('mousemove', (e) => {
            const posx = e.clientX
            const posy = e.clientY
            if (cursorDot !== null) {
                cursorDot.style.left = `${posx}px`
                cursorDot.style.top = `${posy}px`
            }
            if (cursorOutLine !== null) {
                cursorOutLine.style.left = `${posx}px`
                cursorOutLine.style.top = `${posy}px`
            }

            cursorOutLine?.animate({
                left: `${posx}px`,
                top: `${posy}px`,
            }, { duration: 500, fill: 'forwards' })

        })

    }, [])

    return (
        <div className=' hidden sm:block  cursor-none'>
            <div className='cursorDot w-3 h-3 border-primary border-1 bg-secondary fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full z-[1100] pointer-events-none'></div>
            <div className='cursorOutLine w-10 h-10 border-1 border-primary fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full z-[1100] pointer-events-none'></div>
        </div>
    )
}