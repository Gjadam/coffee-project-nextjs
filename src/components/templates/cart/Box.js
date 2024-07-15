"use client"
import { useState } from "react";

// Components
import ProductPrice from "@/components/modules/ProductPrice/ProductPrice";
import QuantityCounter from "@/components/modules/QuantityCounter/QuantityCounter";

// Icons
import { TiTimes } from "react-icons/ti";

export default function Box({name, price, count: productCount}) {

    const [count, setCount] = useState(productCount)

    return (
        <div className=" overflow-x-auto flex justify-between items-center gap-5 p-5 border-y-1 hover:bg-zinc-50 transition-colors">
            <div className="">
                <TiTimes className=" text-xl text-zinc-500 hover:text-red-500  transition-colors" />
            </div>
            <span>{name}</span>
            <ProductPrice price={price} />
            <QuantityCounter count={count} setCount={setCount} />
            <div className=" flex items-center gap-3">
                <span>مجموع:</span>
                <ProductPrice price={price * count} />
            </div>
        </div>
    )
}
