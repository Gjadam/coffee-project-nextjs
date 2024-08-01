"use client"
import { useState } from "react"

// Icons
import { LiaTimesCircleSolid } from "react-icons/lia"

export default function Cart({ _id, cart, totalPrice, createdAt }) {

    const [showOrderDetail, setShowOrderDetail] = useState(false)

    return (
        <div className=" flex justify-between items-center flex-wrap gap-3 p-4 w-full hover:bg-gray-100 rounded-xl transition-colors  ">
            <div className="flex justify-center items-center gap-3">
                <span className=" text-center">شماره سفارش :</span>
                <span className=" text-center">{_id}</span>
            </div>
            <div className="flex justify-center text-center flex-wrap gap-5 text-white text-sm">
                <span className='flex justify-center items-center flex-grow w-24 text-center text-gray-500 text-sm'>
                    {
                        new Date(createdAt).toLocaleDateString("fa-IR")
                    }
                </span>
                <div className=" flex justify-center items-center gap-5 text-xs">
                    <span className=' flex-grow w-36 text-center text-base bg-green-500 rounded-md px-2 py-1'>
                        <span className=' text-xs ml-1'>جمع کل: </span>
                        {totalPrice.toLocaleString()}
                        <span className=' text-xs mr-1'>تومان</span>
                    </span>
                    <span className=' bg-sky-500 text-white min-w-24 text-center p-2  rounded-md ' onClick={() => setShowOrderDetail(true)}>مشاهده جزئیات</span>
                </div>
            </div>
            <div className={`${showOrderDetail ? "visible opacity-100" : "invisible opacity-0"} flex justify-center items-center fixed right-0 left-0 top-0 bottom-0 bg-black bg-opacity-50 z-50 transition-all`}>
                <div className=" flex items-start flex-col gap-3">
                    <LiaTimesCircleSolid className="text-4xl  hover:text-red-500 transition-colors" onClick={() => setShowOrderDetail(false)} />
                    <div className=" bg-white p-5 rounded-3xl w-72">
                        {
                            cart.map(cartDetail => (
                                <div className=" flex justify-between items-center flex-col gap-5 w-full">
                                    <div className=" flex justify-between items-center w-full p-3 rounded-xl hover:bg-zinc-100 transition-colors">
                                        <span className=" text-primary">{cartDetail.name}</span>
                                        <span className=' text-base'>
                                            {cartDetail.price.toLocaleString()}
                                            <span className=' text-xs mr-1'>تومان</span>
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
