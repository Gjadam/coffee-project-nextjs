"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// Components
import ProductPrice from '@/components/modules/ProductPrice/ProductPrice'

// Icons
import { FaStar } from 'react-icons/fa'
import { LiaTimesCircleSolid } from 'react-icons/lia'

// SweetAlert
import Swal from 'sweetalert2'
import toastAlert from '@/utils/toastAlert'

export default function Cart({ _id, name, price, score, weight, smell, suitableFor, shortDescription, longDescription, img }) {

    const router = useRouter()

    const [showProductDetail, setShowProductDetail] = useState(false)

    const deleteProduct = async () => {
        Swal.fire({
            title: "آیا میخواهید این محصول را حذف کنید؟",
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "بله",
            denyButtonText: "خیر"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch('/api/products', {
                    method: "DELETE",
                    body: JSON.stringify({ id: _id })
                })
                if (res.status === 200) {
                    toastAlert.fire({
                        text: "محصول موردنظر با موفقیت حذف شد.",
                        icon: "success",
                        confirmButtonText: "باشه",
                    }).then(() => {
                        router.refresh()
                    })
                }
            }
        })
    }

    return (
        <div className=" flex justify-between items-center gap-10 w-full hover:bg-gray-100 rounded-lg p-3 transition-colors">
            <span className=' max-w-44 min-w-44 text-center'>{name}</span>
            <ProductPrice price={price} />
            <span className=' flex justify-center items-center w-24 text-center text-gray-500 text-sm'>
                {
                    new Array(score).fill(0).map((index) => <FaStar key={index} className=' text-yellow-400' />)
                }
                {
                    new Array(5 - score).fill(0).map((index) => <FaStar key={index} className=' text-zinc-300' />)
                }
            </span>
            <div className=" flex justify-center items-center gap-5 text-xs">
                <span className=' bg-sky-500 text-white min-w-24 text-center p-2  rounded-md ' onClick={() => setShowProductDetail(true)}>مشاهده جزئیات</span>
                <span className=' bg-green-500 text-white min-w-24 text-center p-2  rounded-md '>ویرایش</span>
                <span className=' bg-red-500 text-white min-w-24 text-center p-2  rounded-md ' onClick={deleteProduct}>حذف</span>
            </div>
            <div className={`${showProductDetail ? "visible opacity-100" : "invisible opacity-0"} flex justify-center items-center fixed right-0 left-0 top-0 bottom-0 bg-black bg-opacity-50 z-50 transition-all`}>
                <div className=" flex items-start flex-col gap-3">
                    <LiaTimesCircleSolid className="text-4xl  hover:text-red-500 transition-colors" onClick={() => setShowProductDetail(false)} />
                    <div className=" flex justify-center items-center flex-col max-w-96 rounded-2xl bg-white p-5 shadow-xl">
                        <div className="w-80 h-80">
                            <Image
                                alt="product"
                                src={img}
                                width={0}
                                height={0}
                                sizes='100%'
                                className=' w-full h-full rounded-lg'
                            />
                        </div>
                        <div className="flex flex-col gap-5 w-full mt-5 border-y-1 py-5">
                            <div className=" w-full flex justify-between items-center">
                                <span className=' text-primary'>وزن</span>
                                <span className=' text-secondary'>{weight}گرم</span>
                            </div>
                            <div className=" w-full flex justify-between items-center">
                                <span className=' text-primary'>رایحه</span>
                                <span className=' text-secondary'>{smell}</span>
                            </div>
                            <div className=" w-full flex justify-between items-center">
                                <span className=' text-primary'>مناسب برای</span>
                                <span className=' text-secondary'>{suitableFor}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 w-full py-5">
                            <div className="w-full flex justify-between items-start flex-col gap-3">
                                <span className=' text-secondary'>عنوان</span>
                                <span className='max-h-20 overflow-y-auto text-zinc-500 text-sm'>{shortDescription}</span>
                            </div>
                            <div className=" w-full flex justify-between items-start flex-col gap-3">
                                <span className=' text-secondary'>توضیحات</span>
                                <span className=' max-h-20 overflow-y-auto text-zinc-500 text-sm'>{longDescription}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
