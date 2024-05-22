import Image from 'next/image'
import React from 'react'

export default function OfferBox({imgUrl, title, text}) {
    return (
        <div className="flex justify-center items-center flex-col gap-2 mt-10">
            <Image
                src={imgUrl}
                alt="logo"
                width={100}
                height={100}
            ></Image>
            <h2 className=" text-xl">{title}</h2>
            <p className=" max-w-52 text-sm text-zinc-600">{text}</p>
        </div>
    )
}
