import React from 'react'
import Button from '../Button/Button'
import Image from 'next/image'

export default function ProductBox() {
    return (
        <div className=" group relative flex justify-center items-center flex-col text-2xl ">
            <div className=" group-hover:opacity-70 transition-opacity">
                <Image
                    alt="product"
                    src={"/images/png/product1.png"}
                    width={300}
                    height={100}
                />
                <h2 className=" opacity-80">قهوه اتیوپی</h2>
                <span className=" opacity-50 text-xl ">60 تومان</span>
            </div>
            <div className=" absolute top-2/5 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all ">
                <Button text={'افزودن به سبد خرید'} />
            </div>
        </div>
    )
}
