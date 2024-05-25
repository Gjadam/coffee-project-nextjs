import Image from 'next/image'
import React from 'react'

export default function CoffeeShopInfoBox({iconUrl, title, iconPositionRight}) {
    return (
        <div className={` relative flex justify-center items-start gap-10`}>
            <Image
                src={iconUrl}
                alt="landing-icon"
                width={50}
                height={0}
                className={` absolute ${iconPositionRight ? ' -right-20' : '-left-20'} top-0 hidden xl:block`}
            />
            <div className=" flex flex-col  gap-2">
                <h2 className=" text-3xl">{title}</h2>
                <p className=" max-w-80 min-w-28 opacity-50">اگر متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود</p>
            </div>
        </div>
    )
}
