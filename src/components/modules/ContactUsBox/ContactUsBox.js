import React from 'react'

export default function ContactUsBox({ children, title, body }) {
    return (
        <div className=" flex items-start gap-3">
            {children}
            <div >
                <h1 className=' text-xl'>{title}</h1>
                <p className='text-zinc-600'>{body}</p>
            </div>
        </div>
    )
}
