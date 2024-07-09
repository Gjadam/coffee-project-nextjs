import React from 'react'

export default function CounterBox({ count, title }) {
    return (
        <div className=" flex justify-center items-center flex-col text-center">
            <span className="text-primary text-8xl">{count}</span>
            <h2 className=" text-xl">{title}</h2>
            <p className=" text-sm max-w-72 opacity-50">اگر متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود</p>
        </div>
    )
}
